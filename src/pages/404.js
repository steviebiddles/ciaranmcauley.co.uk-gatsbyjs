import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';

const NotFoundPage = () => (
  <>
    <Seo title="404: Not found" />
    <Layout pageTitle="Oops! Not Found">
      <Container maxWidth="lg">
        <Hidden smDown>
          <Typography className={'page-title'} variant={'h5'} component={'h1'}>Oops! Not Found</Typography>
        </Hidden>
        <Typography variant="body1">You just hit a route that doesn't exist... the sadness :-(</Typography>
      </Container>
    </Layout>
  </>
);

export default NotFoundPage;
