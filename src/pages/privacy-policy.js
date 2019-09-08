import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Container from '@material-ui/core/Container';

const PrivacyPolicyPage = () => (
  <>
    <Seo title="Privacy Policy" />
    <Layout pageTitle="Privacy Policy">
      <Container maxWidth="lg">
        <h1>Privacy Policy</h1>
      </Container>
    </Layout>
  </>
);

export default PrivacyPolicyPage;
