import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { SocialIcon } from 'react-social-icons';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';

const pageTitle = 'Social';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const SocialPage = () => {
  const classes = useStyles();

  return (
    <>
      <Seo title={pageTitle} />
      <Layout title={pageTitle}>
        <Container maxWidth={'lg'}>
          <Hidden smDown>
            <Typography variant={'srOnly'} component={'h1'}>
              {pageTitle}
            </Typography>
          </Hidden>

          <div className={classes.root}>
            <Typography variant={'body'} component={'h3'} gutterBottom>Find me on:</Typography>
            <Grid container spacing={2} className={'social-grid'}>
              <Grid item xs={6}>
                <a
                  href="https://www.instagram.com/ciaranmcauley"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Paper
                    square={true}
                    className={classes.paper}
                    style={{ background: '#3F729B' }}
                  >
                    <SocialIcon network="instagram" fgColor="#fff" style={{ height: 100, width: 100 }} />
                    <Hidden smDown>
                      <Typography className={'social-link'}>instagram.com/ciaranmcauley</Typography>
                    </Hidden>
                  </Paper>
                </a>
              </Grid>
              <Grid item xs={6}>
                <a
                  href="https://soundcloud.com/ciaranmcauleyofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Paper
                    square={true}
                    className={classes.paper}
                    style={{ background: '#FF5700' }}
                  >
                    <SocialIcon network="soundcloud" fgColor="#fff" style={{ height: 100, width: 100 }} />
                    <Hidden smDown>
                      <Typography className={'social-link'}>soundcloud.com/ciaranmcauleyofficial</Typography>
                    </Hidden>
                  </Paper>
                </a>
              </Grid>
              <Grid item xs={6}>
                <a
                  href="https://www.youtube.com/channel/UCovhe0PPACu3MYZpUGf3y5w"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Paper
                    square={true}
                    className={classes.paper}
                    style={{ background: '#FF3433' }}
                  >
                    <SocialIcon network="youtube" fgColor="#fff" style={{ height: 100, width: 100 }} />
                    <Hidden smDown>
                      <Typography className={'social-link'}>youtube.com/channel/UCovhe0PPACu3MYZpUGf3y5w</Typography>
                    </Hidden>
                  </Paper>
                </a>
              </Grid>
              <Grid item xs={6}>
                <a
                  href="https://www.facebook.com/djciaranmcauley"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Paper
                    square={true}
                    className={classes.paper}
                    style={{ background: '#3B5998' }}
                  >
                    <SocialIcon network="facebook" fgColor="#fff" style={{ height: 100, width: 100 }} />
                    <Hidden smDown>
                      <Typography className={'social-link'}>facebook.com/djciaranmcauley</Typography>
                    </Hidden>
                  </Paper>
                </a>
              </Grid>
              <Grid item xs={6}>
                <a
                  href="https://open.spotify.com/artist/4tTgD3KLaNlHg2nxAgGaRi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Paper
                    square={true}
                    className={classes.paper}
                    style={{ background: '#2FBD59' }}
                  >
                    <SocialIcon network="spotify" fgColor="#fff" style={{ height: 100, width: 100 }} />
                    <Hidden smDown>
                      <Typography className={'social-link'}>open.spotify.com/artist/4tTgD3KLaNlHg2nxAgGaRi</Typography>
                    </Hidden>
                  </Paper>
                </a>
              </Grid>
              <Grid item xs={6}>
                <a
                  href="mailto:ciaran@ciaranmcauley.co.uk"
                >
                  <Paper
                    square={true}
                    className={classes.paper}
                    style={{ background: '#7F7F7F' }}
                  >
                    <SocialIcon network="email" fgColor="#fff" style={{ height: 100, width: 100 }} />
                    <Hidden smDown>
                      <Typography className={'social-link'}>ciaran@ciaranmcauley.co.uk</Typography>
                    </Hidden>
                  </Paper>
                </a>
              </Grid>
            </Grid>
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default SocialPage;
