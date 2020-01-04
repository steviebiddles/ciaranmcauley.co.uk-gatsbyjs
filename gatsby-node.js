/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
const {
  getEvents: FacebookEvents,
  getPosts: FacebookPosts,
} = require('./src/providers/facebook/facebook-provider');
const {
  fetchOEmbedData,
} = require('./src/utils/http-client/oembed-http-client');

/*"cover": {
                "offset_x": 50,
                "offset_y": 50,
                "source": "https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/71240646_2417265471873775_4459994276113154048_n.jpg?_nc_cat=110&_nc_oc=AQkHUPo3DQKJxC_in5weA90uvxAqU7fwYkST1n64ag46QeKdDG5a9XR_cF1td4ij9Gw&_nc_ht=scontent.xx&oh=d62c8549e2737c1bbd455b664ba8fef6&oe=5E5230BA",
                "id": "2417265465207109"
            },*/

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type Cover {
      id: String
      offset_x: Int
      offset_y: Int
      source: String
    }
    
    type Location {
      city: String
      country: String
      latitude: Float
      longitude: Float
      street: String
      zip: String
    }
    
    type Place {
      id: String
      name: String
      location: Location
    }

    type FacebookEvent implements Node {
      eventId: String
      name: String
      cover: Cover
      startTime: Date
      endTime: Date
      place: Place
      ticketUri: String
      attendingCount: Int
      interestedCount: Int
    }
  `;
  createTypes(typeDefs)
};

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
  reporter,
}) => {
  const [facebookEvents, facebookPosts] = await Promise.all([
    FacebookEvents(),
    FacebookPosts(),
  ]);

  if (!facebookEvents || !facebookPosts) {
    reporter.panicOnBuild(`Error fetching content from Facebook.`);
    return;
  }

  if (facebookEvents) {
    facebookEvents.forEach(facebookEvent => {
      const node = {
        id: createNodeId(`FacebookEvent-${facebookEvent.id}`),
        eventId: facebookEvent.id,
        name: facebookEvent.name,
        cover: facebookEvent.cover,
        startTime: facebookEvent.start_time,
        endTime: facebookEvent.end_time,
        place: facebookEvent.place,
        ticketUri: facebookEvent.ticket_uri,
        attendingCount: facebookEvent.attending_count,
        interestedCount: facebookEvent.interested_count,
        internal: {
          type: 'FacebookEvent',
          contentDigest: createContentDigest(facebookEvent),
        },
      };

      actions.createNode(node);
    });
  }

  if (facebookPosts) {
    for (let i = 0; i < facebookPosts.length; i++) {
      const facebookPost = facebookPosts[i];

      if (facebookPost.message) {
        let oEmbedFacebook;
        let oEmbedSoundCloud;

        if (facebookPost.attachments) {
          const { media_type, target, url } = facebookPost.attachments.data[0];

          if (media_type === 'video' && !url.includes('youtu.be')) {
            oEmbedFacebook = await fetchOEmbedData('facebook', target.url);
          }

          if (media_type === 'music' && url.includes('soundcloud.com')) {
            oEmbedSoundCloud = await fetchOEmbedData('soundCloud', url);
          }
        }

        const node = {
          id: createNodeId(`FacebookPost-${facebookPost.id}`),
          postId: facebookPost.id,
          message: facebookPost.message,
          fullPicture: facebookPost.full_picture,
          attachments: facebookPost.attachments,
          oEmbedFacebook,
          oEmbedSoundCloud,
          permalinkUrl: facebookPost.permalink_url,
          messageTags: facebookPost.message_tags,
          createdTime: facebookPost.created_time,
          internal: {
            type: 'FacebookPost',
            contentDigest: createContentDigest(facebookPost),
          },
        };

        actions.createNode(node);
      }
    }
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(
    `
      {
        allFacebookPost(
          sort: { fields: createdTime, order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              id
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(`Error while creating posts paging.`);
    return;
  }

  // Create posts pages
  const posts = result.data.allFacebookPost.edges;
  const postsPerPage = parseInt(process.env.POST_PER_PAGE, 10) || 10;
  const numPages = Math.ceil(posts.length / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    reporter.success(`Creating posts page #${i + 1}`);

    createPage({
      path: i === 0 ? `/posts` : `/posts/${i + 1}`,
      component: path.resolve('./src/templates/posts/posts-list-template.js'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
};
