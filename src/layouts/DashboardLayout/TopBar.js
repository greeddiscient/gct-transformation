import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
  Typography
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import Logo from 'src/components/Logo';

const useStyles = makeStyles(theme => ({
  root: {
    left: 256,
    minWidth: '1100px',
    width: 'calc(100% - 256px)',
    height: 69,
    [theme.breakpoints.down('md')]: {
      left: 0,
      width: '100%',
      height: 69
    }
  },
  avatar: {
    width: 60,
    height: 60
  },
  title: {
    flexGrow: 1
  }
}));

const TopBar = ({ className, onMobileNavOpen, ...rest }) => {
  const classes = useStyles();
  const [notifications] = useState([]);
  const navigate = useNavigate();

  return (
    <AppBar
      position="absolute"
      className={clsx(classes.root, className)}
      elevation={0}
      {...rest}
    >
      <Toolbar>
        <Typography
          component="h2"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          Transformation Dashboard
        </Typography>
        <Box flexGrow={1} />
        <Hidden mdDown>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            color="inherit"
            onClick={() => {
              navigate('/login', { replace: true });
            }}
          >
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

export default TopBar;
