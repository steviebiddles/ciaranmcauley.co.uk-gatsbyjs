import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import UpdateIcon from '@material-ui/icons/Update';
import EventIcon from '@material-ui/icons/Event';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PeopleIcon from '@material-ui/icons/People';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import { Link } from 'gatsby';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    width: '100%',
    position: 'fixed',
    bottom: 0,
    background: 'rgb(30,30,30)',
  },
  fullList: {
    width: 'auto',
  },
});

const NavigationIcon = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    event.preventDefault();

    const selected = document.getElementsByClassName('Mui-selected');
    for (let i = 0; i < selected.length; i++) {
      selected[i].classList.remove('Mui-selected');
    }

    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const fullList = side => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem button key="0" component={Link} to="/about">
          <ListItemIcon>
            <InfoOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button key="1" component={Link} to="/contact">
          <ListItemIcon>
            <EmailOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
        <Divider />
        <ListItem button key="2" component={Link} to="/privacy-policy">
          <ListItemIcon>
            <LockOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Privacy Policy" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <nav>
      <BottomNavigation
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          component={Link}
          activeClassName="Mui-selected"
          to="/posts/"
          value="posts"
          label="Posts"
          partiallyActive={true}
          icon={<UpdateIcon />}
        />
        <BottomNavigationAction
          component={Link}
          activeClassName="Mui-selected"
          to="/events/"
          value="events"
          label="Events"
          icon={<EventIcon />}
        />
        <BottomNavigationAction
          component={Link}
          activeClassName="Mui-selected"
          to="/social/"
          value="social"
          label="Social"
          icon={<PeopleIcon />}
        />
        <BottomNavigationAction
          onClick={toggleDrawer('bottom', true)}
          value="more"
          label="More"
          icon={<ListOutlinedIcon />}
        />
      </BottomNavigation>
      <Drawer
        anchor="bottom"
        open={state.bottom}
        onClose={toggleDrawer('bottom', false)}
      >
        {fullList('bottom')}
      </Drawer>
    </nav>
  );
};

export default NavigationIcon;
