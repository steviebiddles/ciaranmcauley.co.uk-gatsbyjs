import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Container from '@material-ui/core/Container';
import { graphql } from 'gatsby';
import DOMPurify from 'dompurify';
import { Typography } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';

const Address = props => {
  const { address, townCity, postCode, country } = props.location;

  return (
    <>
      <address>
        <Typography variant={'h6'} component={'h6'}>
          {address}
        </Typography>
        <Typography variant={'body1'}>
          {townCity},<br />
          {postCode},<br />
          {country}
        </Typography>
      </address>
      <hr />
    </>
  );
};

const ContactPage = ({ data }) => {
  const { childMarkdownRemark } = data.content;
  const { title } = childMarkdownRemark.frontmatter;
  const { html } = childMarkdownRemark;
  const {
    childJsonJson: { locations },
  } = data.locations;

  return (
    <>
      <Seo title={title} />
      <Layout title={title}>
        <Container maxWidth={'lg'}>
          <Hidden smDown>
            <Typography variant={'h4'} component={'h1'}>
              {title}
            </Typography>
          </Hidden>
          <Typography
            variant={'body1'}
            component={'div'}
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }}
          />
          <hr />
          <Typography variant={'h5'} component={'h2'} gutterBottom>
            Locations
          </Typography>
          {locations.map((location, index) => {
            return <Address key={index} location={location} />;
          })}
        </Container>
      </Layout>
    </>
  );
};

export const query = graphql`
  query ContactPageWithLocationsQuery {
    content: file(
      sourceInstanceName: { eq: "markdown" }
      relativePath: { eq: "contact.md" }
    ) {
      childMarkdownRemark {
        frontmatter {
          title
        }
        html
      }
    }

    locations: file(
      sourceInstanceName: { eq: "json" }
      relativePath: { eq: "contact.json" }
    ) {
      childJsonJson {
        locations {
          address
          country
          postCode
          townCity
        }
      }
    }
  }
`;

export default ContactPage;
