import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import Button from '@material-ui/core/Button';
import { Link } from 'gatsby';
import Container from '@material-ui/core/Container';
import Seo from '../../components/seo';

const PostList = ({ data, pageContext }) => {
  const { currentPage, numPages } = pageContext;

  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();

  const { allFacebookPost: facebookPosts } = data;

  return (
    <>
      <Seo title="Posts" />
      <Layout pageTitle="Posts">
        <Container maxWidth="lg">
          {facebookPosts.edges.map((edge, index) => {
            const { id, message } = edge.node;

            return (
              <div key={index}>
                <h1>Post {id}</h1>
                {message}
              </div>
            );
          })}

          {!isFirst && (
            <Button
              component={Link}
              to={`/posts/${prevPage}`}
              rel="prev"
              variant="contained"
              color="primary"
            >
              ← Previous Page
            </Button>
          )}

          {!isLast && (
            <Button
              component={Link}
              to={`/posts/${nextPage}`}
              rel="next"
              variant="contained"
              color="primary"
            >
              Next Page →
            </Button>
          )}
        </Container>
      </Layout>
    </>
  );
};

export const query = graphql`
  query facebookPostListQuery($skip: Int!, $limit: Int!) {
    allFacebookPost(
      sort: { fields: createdTime, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          message
        }
      }
    }
  }
`;

export default PostList;
