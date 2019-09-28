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
    facebookPosts.forEach(facebookPost => {
      const node = {
        id: createNodeId(`FacebookPost-${facebookPost.id}`),
        postId: facebookPost.id,
        message: facebookPost.message,
        picture: facebookPost.picture,
        fullPicture: facebookPost.full_picture,
        attachments: facebookPost.attachments,
        permalinkUrl: facebookPost.permalink_url,
        createdTime: facebookPost.created_time,
        internal: {
          type: 'FacebookPost',
          contentDigest: createContentDigest(facebookPost),
        },
      };

      actions.createNode(node);
    });
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
