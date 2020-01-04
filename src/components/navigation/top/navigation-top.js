import React from 'react';
import { Link } from 'gatsby';
import styles from './navigation-top.module.scss';

const NavigationTop = () => {
  return (
    <>
      <nav className={styles.navigationTop}>
        {/*<Link to="/" partiallyActive={false} activeClassName={styles.active}>
          Home
        </Link>*/}
        <Link
          to="/posts/"
          partiallyActive={true}
          activeClassName={styles.active}
        >
          Posts
        </Link>
        <Link
          to="/events/"
          partiallyActive={true}
          activeClassName={styles.active}
        >
          Events
        </Link>
        <Link
          to="/social/"
          partiallyActive={true}
          activeClassName={styles.active}
        >
          Social
        </Link>
        <Link
          to="/about/"
          partiallyActive={true}
          activeClassName={styles.active}
        >
          About
        </Link>
        {/*<Link to="/contact/" partiallyActive={true} activeClassName={styles.active}>
          Contact
        </Link>*/}
      </nav>
    </>
  );
};

export default NavigationTop;
