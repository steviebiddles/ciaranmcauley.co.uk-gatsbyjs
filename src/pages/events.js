import React from 'react';
import Typography from '@material-ui/core/Typography';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Container from '@material-ui/core/Container';
import Event from '../components/event';
import { graphql } from 'gatsby';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core';
import Masonry from 'react-masonry-css';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('md')]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
}));

const EventPage = ({ data }) => {
  const { childMarkdownRemark } = data.page;
  const { title, description } = childMarkdownRemark.frontmatter;
  const { allFacebookEvent: facebookEvents } = data;

  const styles = useStyles();

  const breakpointColumnsObj = {
    default: 3,
    1024: 2,
    640: 1
  };

  return (
    <>
      <Seo title={title} description={description}/>
      <Layout title={title}>
        <Container maxWidth={'lg'} className={styles.root}>
          <Hidden smDown>
            <Typography variant={'srOnly'} component={'h1'}>
              {title}
            </Typography>
          </Hidden>
          <section>
            {facebookEvents.edges.length > 0 && (
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {/* array of JSX items */}

                {facebookEvents.edges.map((edge, index) => {
                  return <Event key={index} event={edge.node}/>;
                })}
              </Masonry>
            )}
            {facebookEvents.edges.length === 0 && (
              <Typography component={'h5'} align={'center'}>
                No upcoming events. Check back soon.
              </Typography>
            )}
          </section>
        </Container>
      </Layout>
    </>
  );
};

export const query = graphql`
    query facebookEventListQuery {
        allFacebookEvent(
            sort: { fields: startTime, order: DESC }
        ) {
            edges {
                node {
                    id
                    eventId
                    name
                    attendingCount
                    interestedCount
                    cover {
                        source
                    }
                    startTime
                    endTime
                    place {
                        name
                        location {
                            city
                            country
                        }
                    }
                    ticketUri
                }
            }
        }

        page: file(
            sourceInstanceName: { eq: "markdown" }
            relativePath: { eq: "events.md" }
        ) {
            childMarkdownRemark {
                frontmatter {
                    title
                    description
                }
            }
        }
    }
`;

export default EventPage;
