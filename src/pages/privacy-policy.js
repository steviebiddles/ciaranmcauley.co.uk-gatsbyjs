import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import { graphql } from 'gatsby';

const PrivacyPolicyPage = ({data}) => {
  const { childMarkdownRemark } = data.file;
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
  query PrivacyPolicyPageQuery {
    file(
      sourceInstanceName: { eq: "markdown" }
      relativePath: { eq: "privacy-policy.md" }
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

export default PrivacyPolicyPage;
