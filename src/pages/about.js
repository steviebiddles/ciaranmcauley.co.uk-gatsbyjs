import React from 'react';
import Seo from '../components/seo';
import Container from '@material-ui/core/Container';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';

const AboutPage = ({ data }) => {
  const { childMarkdownRemark } = data.page;
  const { title, description } = childMarkdownRemark.frontmatter;
  const { html } = childMarkdownRemark;

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
        </Container>
      </Layout>
    </>
  );
};

export const query = graphql`
  query AboutPageQuery {
    page: file(
      sourceInstanceName: { eq: "markdown" }
      relativePath: { eq: "about.md" }
    ) {
      childMarkdownRemark {
        frontmatter {
          title
          description
        }
        html
      }
    }
  }
`;

export default AboutPage;
