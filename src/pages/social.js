import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Container from '@material-ui/core/Container';

const SocialPage = () => (
  <>
    <Seo title="Social" />
    <Layout pageTitle="Social">
      <Container maxWidth="lg">
        <h1>Social</h1>
      </Container>
    </Layout>
  </>
);

export default SocialPage;
