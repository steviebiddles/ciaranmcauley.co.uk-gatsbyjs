import React from 'react';
import Typography from '@material-ui/core/Typography';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Container from '@material-ui/core/Container';
import Event from '../components/event';
import { graphql } from 'gatsby';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    ['@media (max-width: 960px)']: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
});

const EventPage = ({ data }) => {
  const { childMarkdownRemark } = data.page;
  const { title, description } = childMarkdownRemark.frontmatter;
  const { allFacebookEvent: facebookEvents } = data;

  const styles = useStyles();

  return (
    <>
      <Seo title={title} description={description} />
      <Layout title={title}>
        <Container maxWidth={'md'} className={styles.root}>
          <Hidden smDown>
            <Typography variant={'srOnly'} component={'h1'}>
              {title}
            </Typography>
          </Hidden>
          <section>
            {facebookEvents.edges.map((edge, index) => {
              return <Event key={index} event={edge.node}/>
            })}
          </section>
        </Container>
      </Layout>
    </>
  );
};

export const query = graphql`
  query FacebookEvent {
    allFacebookEvent(sort: { fields: startTime, order: ASC }) {
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
