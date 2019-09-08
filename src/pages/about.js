import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Container from '@material-ui/core/Container';

const AboutPage = () => (
  <>
    <Seo title="About" />
    <Layout pageTitle="About">
      <Container maxWidth="lg">
        <h1>About</h1>
      </Container>
    </Layout>
  </>
);

export default AboutPage;
