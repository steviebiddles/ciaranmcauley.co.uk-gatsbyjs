import React from 'react';
import { Link } from 'gatsby';
import styles from './navigation-bottom.module.scss';
import Typography from '@material-ui/core/Typography';

const NavigationBottom = () => {
  return (
    <>
      <nav className={styles.navigationBottom}>
        <Link to="/privacy-policy/">
          <Typography variant="body1">Privacy Policy</Typography>
        </Link>
      </nav>
    </>
  );
};

export default NavigationBottom;
