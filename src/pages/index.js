import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Container from '@material-ui/core/Container';

export default () => (
  <>
    <Seo title="DJ Ciaran McAuley" />
    <Layout pageTitle="DJ Ciaran McAuley">
      <Container maxWidth="lg">
        <h1>Homepage!</h1>
      </Container>
    </Layout>
  </>
);
