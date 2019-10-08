import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { Link } from 'gatsby';
import Container from '@material-ui/core/Container';
import Seo from '../../components/seo';
import { makeStyles, Typography } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import { blue } from '@material-ui/core/colors';

import './post-list.scss';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';

const useStyles = makeStyles({
  root: {
    ['@media (max-width: 960px)']: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  avatar: {
    backgroundColor: blue[500],
  },
});

const pageTitle = 'Posts';

const Post = ({ node }) => {
  const {
    message,
    createdTime,
    iFrameMarkup,
    fullPicture,
    permalinkUrl,
    messageTags,
  } = node;
  const styles = useStyles();

  return (
    <article>
      <Card>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={styles.avatar}>
              F
            </Avatar>
          }
          title={'Ciaran McAuley'}
          subheader={createdTime}
        />
        {iFrameMarkup && (
          <section
            style={{ textAlign: 'center' }}
            dangerouslySetInnerHTML={{ __html: iFrameMarkup }}
          />
        )}
        {!iFrameMarkup && fullPicture && (
          <CardMedia
            component={'img'}
            alt={`Post cover image`}
            width={'720'}
            image={fullPicture}
            title={'Post cover image'}
          />
        )}
        <CardContent>
          <Typography component="p" gutterBottom>
            {message}
          </Typography>
          {/*{messageTags && (
            messageTags.map((tag) => {
              return <Typography variant="body2" component={'span'} className={'tag'}>#{tag.name} </Typography>
            })
          )}*/}
        </CardContent>
        <CardActions className={'post-actions'}>
          <a href={permalinkUrl} target={'_blank'}>
            <Button size="small" color="primary">
              Full Details
            </Button>
          </a>
        </CardActions>
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

  const styles = useStyles();

  return (
    <>
      <Seo title={pageTitle} />
      <Layout title={pageTitle}>
        <Container maxWidth={'lg'} className={styles.root}>
          <Hidden smDown>
            <Typography variant={'srOnly'} component={'h1'}>
              {pageTitle}
            </Typography>
          </Hidden>
          {facebookPosts.edges.map((edge, index) => {
            return <Post key={index} node={edge.node} />;
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
          fullPicture
          iFrameMarkup
          permalinkUrl
          createdTime(formatString: "MMMM Do, YYYY")
          messageTags {
            name
          }
        }
      }
    }
  }
`;

export default PostList;
