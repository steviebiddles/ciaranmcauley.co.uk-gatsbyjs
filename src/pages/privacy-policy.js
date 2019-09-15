import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';

const pageTitle = 'Privacy Policy';

const PrivacyPolicyPage = () => (
  <>
    <Seo title={pageTitle} />
    <Layout title={pageTitle}>
      <Container maxWidth={'lg'}>
        <Hidden smDown>
          <Typography variant={'h4'} component={'h1'}>
            {pageTitle}
          </Typography>
        </Hidden>
      </Container>
    </Layout>
  </>
);

export default PrivacyPolicyPage;
