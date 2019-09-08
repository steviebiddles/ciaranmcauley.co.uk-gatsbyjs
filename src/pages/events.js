import React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';
import Container from '@material-ui/core/Container';
import { graphql } from 'gatsby';

const EventPage = ({ data }) => {
  const { allFacebookEvent: facebookEvents } = data;
  const events = facebookEvents.edges.map((edge, index) => {
    const { name } = edge.node;

    return <li key={index}>{name}</li>;
  });

  return (
    <>
      <Seo title="Events" />
      <Layout pageTitle="Events">
        <Container maxWidth="lg">
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
