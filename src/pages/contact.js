import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Container from '@material-ui/core/Container';
import { graphql } from 'gatsby';
import { Typography } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';

const ContactPage = ({ data }) => {
  const { content } = data;
  const { childMarkdownRemark } = content;
  const { title, description } = childMarkdownRemark.frontmatter;

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
          <Typography variant="h2" color={'primary-main'} gutterBottom>
            Audio Religion
          </Typography>
          <Typography variant="body1">
            Worldwide Booking & Management
          </Typography>
          <br/>
          <Typography variant="body1">
            <strong><u>Booking Agent</u></strong><br/>
            Chris Duncan<br/>
            <a href="mailto:chris@audioreligion.co.uk">chris@audioreligion.co.uk</a>
          </Typography>
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
      }
    }

    bookingImage: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "contact.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 720) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default ContactPage;
