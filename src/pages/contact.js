import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Container from '@material-ui/core/Container';
import { graphql } from 'gatsby';
import { Typography } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import Img from 'gatsby-image';

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
  const { content, locations, gatsbyLogo } = data;
  const { childMarkdownRemark } = content;
  const { title, description } = childMarkdownRemark.frontmatter;
  const { html } = childMarkdownRemark;

  const { childJsonJson } = locations;
  const { childImageSharp } = gatsbyLogo;

  return (
    <>
      <Seo title={title} description={description} />
      <Layout title={title}>
        <Container maxWidth={'lg'}>
          <Hidden smDown>
            <Typography variant={'srOnly'} component={'h1'}>
              {title}
            </Typography>
          </Hidden>
          <Typography
            variant={'body1'}
            component={'div'}
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <hr/>
          <Typography variant={'h5'} component={'h2'} gutterBottom>
            Image
          </Typography>
          <Img fixed={childImageSharp.fixed} fadeIn={false} alt="Ciaran McAuley logo" />
          <hr />
          <Typography variant={'h5'} component={'h2'} gutterBottom>
            Locations
          </Typography>
          {childJsonJson.locations.map((location, index) => {
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
          description
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
    
    gatsbyLogo: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "gatsby-logo.png" }
    ) {
      childImageSharp {
        fixed(width: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default ContactPage;
