import React from 'react';
import Seo from '../components/seo';
import DOMPurify from 'dompurify';
import Container from '@material-ui/core/Container';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';

const AboutPage = ({ data }) => {
  const { childMarkdownRemark } = data.file;
  const { title } = childMarkdownRemark.frontmatter;
  const { html } = childMarkdownRemark;

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
        </Container>
      </Layout>
    </>
  );
};

export const query = graphql`
  query AboutPageQuery {
    file(
      sourceInstanceName: { eq: "markdown" }
      relativePath: { eq: "about.md" }
    ) {
      childMarkdownRemark {
        frontmatter {
          title
        }
        html
      }
    }
  }
`;

export default AboutPage;
