import React from 'react';
import { Link } from 'gatsby';
import styles from './navigation-bottom.module.scss';

const NavigationBottom = () => {
  return (
    <>
      <nav className={styles.navigationBottom}>
        <Link to="/privacy-policy/">
          Privacy Policy
        </Link>
      </nav>
    </>
  );
};

export default NavigationBottom;
