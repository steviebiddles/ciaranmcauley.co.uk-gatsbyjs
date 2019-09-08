import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Container from '@material-ui/core/Container';

const ContactPage = () => (
  <>
    <Seo title="Contact" />
    <Layout pageTitle="Contact">
      <Container maxWidth="lg">
        <h1>Contact</h1>
      </Container>
    </Layout>
  </>
);

export default ContactPage;
