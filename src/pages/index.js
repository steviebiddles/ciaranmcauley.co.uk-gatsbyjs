import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';

const pageTitle = 'Homepage';

export default () => (
  <>
    <Seo title={pageTitle} />
    <Layout title={pageTitle}>
      <Container maxWidth={'lg'}>
        <Hidden smDown>
          <Typography variant={'srOnly'} component={'h1'}>
            {pageTitle}
          </Typography>
        </Hidden>
        <Typography variant={'body1'}>Hello World!</Typography>
      </Container>
    </Layout>
  </>
);
