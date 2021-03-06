import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import Footer from './footer';
import Header from './header';
import withWidth from '@material-ui/core/withWidth';
import { theme } from '../config/theme';
import '../assets/styles/styles.scss';

function Layout(props) {
  const { children } = props;

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header title={props.title} />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default withWidth()(Layout);
