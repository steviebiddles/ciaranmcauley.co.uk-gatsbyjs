import React from 'react';
import Typography from '@material-ui/core/Typography';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Container from '@material-ui/core/Container';
import { graphql } from 'gatsby';
import Hidden from '@material-ui/core/Hidden';

const pageTitle = 'Events';

const EventPage = ({ data }) => {
  const { allFacebookEvent: facebookEvents } = data;
  const events = facebookEvents.edges.map((edge, index) => {
    const { name } = edge.node;

    return (
      <li key={index}>
        <Typography variant={'body1'}>{name}</Typography>
      </li>
    );
  });

  return (
    <>
      <Seo title={pageTitle} />
      <Layout title={pageTitle}>
        <Container maxWidth={'lg'}>
          <Hidden smDown>
            <Typography variant={'h4'} component={'h1'}>
              {pageTitle}
            </Typography>
          </Hidden>
          <ul>{events}</ul>
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
          attendingCount
          cover {
            source
          }
          endTime
          name
          place {
            name
            location {
              city
              country
            }
          }
          startTime
          ticketUri
        }
      }
    }
  }
`;

export default EventPage;
