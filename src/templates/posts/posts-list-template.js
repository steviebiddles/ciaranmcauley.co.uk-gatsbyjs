import React from 'react';
import { graphql, Link } from 'gatsby';
import { SocialIcon } from 'react-social-icons';
import Layout from '../../components/layout';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Container from '@material-ui/core/Container';
import Seo from '../../components/seo';
import { makeStyles, Typography } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import { blue } from '@material-ui/core/colors';
import { Helmet } from 'react-helmet';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';

import './post-list.scss';

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
  stepper: {
    maxWidth: '100%',
    flexGrow: 1,
  },
  paging: {
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  numbers: {
    textAlign: 'center',
  },
  next: {
    textAlign: 'right',
  },
});

const pageTitle = 'Posts';

const Post = ({ node }) => {
  const {
    message,
    createdTime,
    oEmbedFacebook,
    oEmbedSoundCloud,
    fullPicture,
    permalinkUrl,
    // messageTags,
  } = node;
  const hasMedia = oEmbedFacebook || oEmbedSoundCloud;

  return (
    <article>
      <Card>
        <CardHeader
          avatar={
            <SocialIcon network="facebook" fgColor="#fff" style={{ height: 40, width: 40 }} />
          }
          title={'Facebook'}
          subheader={createdTime}
        />
        {oEmbedFacebook && (
          <section
            style={{ textAlign: 'center' }}
            dangerouslySetInnerHTML={{ __html: oEmbedFacebook.html }}
          />
        )}
        {oEmbedSoundCloud && (
          <section
            style={{ textAlign: 'center' }}
            dangerouslySetInnerHTML={{ __html: oEmbedSoundCloud.html }}
          />
        )}
        {!hasMedia && fullPicture && (
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
      <Helmet>
        <script
          async
          defer
          src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2"
        ></script>
      </Helmet>
      <Layout title={pageTitle}>
        <div id="fb-root"></div>
        <Container maxWidth={'lg'} className={styles.root}>
          <Hidden smDown>
            <Typography variant={'srOnly'} component={'h1'}>
              {pageTitle}
            </Typography>
          </Hidden>
          {facebookPosts.edges.map((edge, index) => {
            return <Post key={index} node={edge.node} />;
          })}

          <section className={styles.paging}>
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="center"
            >
              <Grid item xs={4} className={'back'}>
                <Button
                  component={Link}
                  to={`/posts/${prevPage}`}
                  rel={'back'}
                  disabled={isFirst}
                >
                  <KeyboardArrowLeft />
                  Back
                </Button>
              </Grid>
              <Grid item xs={4} className={styles.numbers}>
                <Typography component="span" gutterBottom>
                  {currentPage} / {numPages}
                </Typography>
              </Grid>
              <Grid item xs={4} className={styles.next}>
                <Button
                  component={Link}
                  to={`/posts/${nextPage}`}
                  rel={'next'}
                  disabled={isLast}
                >
                  Next
                  <KeyboardArrowRight />
                </Button>
              </Grid>
            </Grid>
          </section>
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
          oEmbedFacebook {
            html
          }
          oEmbedSoundCloud {
            html
          }
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
