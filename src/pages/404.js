import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Container from '@material-ui/core/Container';

const NotFoundPage = () => (
  <>
    <Seo title="404: Not found" />
    <Layout pageTitle="Oops! Not Found">
      <Container maxWidth="lg">
        <p>You just hit a route that doesn&#39;t exist... the sadness :-(</p>
      </Container>
    </Layout>
  </>
);

export default NotFoundPage;
