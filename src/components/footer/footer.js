import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
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
              <Grid item xs={9}>
                <Typography variant="h4">
                  Audio Religion
                </Typography>
                <Typography variant="body1">
                  Worldwide Booking & Management
                </Typography>
                <Typography variant="body1">
                  <a href="mailto:chris@audioreligion.co.uk">chris@audioreligion.co.uk</a>
                </Typography>
              </Grid>
              <Grid item xs={3}>
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
