import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import styles from './footer.module.scss';
import NavigationBottom from '../navigation/bottom';
import NavigationIcon from '../navigation/icon';

const Footer = () => {
  return (
    <>
      <Hidden smDown>
        <footer className={styles.desktopFooter}>
          <Container maxWidth="lg">
            <Grid container>
              <Grid item xs={6}>
                Copyright &copy; 2019
              </Grid>
              <Grid item xs={6}>
                <NavigationBottom />
              </Grid>
            </Grid>
          </Container>
        </footer>
      </Hidden>

      <Hidden mdUp>
        <footer>
          <NavigationIcon />
        </footer>
      </Hidden>
    </>
  );
};

export default Footer;
