import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Logo from '../logo';
import NavigationTop from '../navigation/top';
import styles from './header.module.scss';

const Header = ({ title }) => {
  return (
    <>
      <Hidden smDown>
        <header className={styles.desktopHeader}>
          <Container maxWidth="lg">
            <Grid container>
              <Grid item xs={3}>
                <Logo />
              </Grid>
              <Grid item xs={9}>
                <NavigationTop />
              </Grid>
            </Grid>
          </Container>
        </header>
      </Hidden>

      <Hidden mdUp>
        <header>
          <AppBar position="static">
            <Toolbar>
              <Typography variant={'h6'} component={'h1'}>{title}</Typography>
            </Toolbar>
          </AppBar>
        </header>
      </Hidden>
    </>
  );
};

export default Header;
