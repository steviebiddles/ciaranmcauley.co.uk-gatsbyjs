import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'gatsby';
import Container from '@material-ui/core/Container';
import Seo from '../../components/seo';
import { Typography } from '@material-ui/core';

const pageTitle = 'Posts';

const Post = props => {
  const { id, message, createdTime } = props;

  return (
    <article style={{ marginTop: '1rem' }}>
      <Card>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Post #{id}
          </Typography>
          <Typography variant="body2" component="p" gutterBottom>
            {message}
          </Typography>
          <Typography color="textSecondary" component="p">
            {createdTime}
          </Typography>
        </CardContent>
      </Card>
    </article>
  );
};

const PostList = ({ data, pageContext }) => {
  const { currentPage, numPages } = pageContext;

  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();

  const { allFacebookPost: facebookPosts } = data;

  return (
    <>
      <Seo title={pageTitle} />
      <Layout title={pageTitle}>
        <Container maxWidth={'lg'}>
          {facebookPosts.edges.map((edge, index) => {
            const { id, message, createdTime } = edge.node;

            return <Post key={index} id={id} message={message} createdTime={createdTime} />;
          })}

          <hr />

          {!isFirst && (
            <Button
              component={Link}
              to={`/posts/${prevPage}`}
              rel={'prev'}
              variant={'contained'}
              color={'primary'}
            >
              ← Previous Page
            </Button>
          )}

          {!isLast && (
            <Button
              component={Link}
              to={`/posts/${nextPage}`}
              rel={'next'}
              variant={'contained'}
              color={'primary'}
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
          createdTime(formatString: "MMMM Do, YYYY")
        }
      }
    }
  }
`;

export default PostList;
