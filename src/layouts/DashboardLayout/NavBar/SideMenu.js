import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';
import TvIcon from '@material-ui/icons/Tv';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

const SideMenu = props => {
  const classes = useStyles();
  const [fuopen, setfuOpen] = React.useState(false);
  const [cfuopen, setcfuOpen] = React.useState(false);

  const handleGroupClick = () => {
    setfuOpen(false);
    setcfuOpen(false);
  };
  const handleFUClick = () => {
    setfuOpen(!fuopen);
    setcfuOpen(false);
  };
  const handleCFUClick = () => {
    setcfuOpen(!cfuopen);
    setfuOpen(false);
  };
  return (
    <List>
      <ListItem
        button
        onClick={handleGroupClick}
        key="group"
        component={RouterLink}
        to="/app"
      >
        <ListItemIcon>
          <TvIcon />
        </ListItemIcon>
        <ListItemText primary="Group Transformation" />
      </ListItem>

      <ListItem button onClick={handleCFUClick}>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary="CFU Transformation" />
        {cfuopen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={cfuopen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem
            button
            className={classes.nested}
            component={RouterLink}
            to="/app/mob"
          >
            <ListItemIcon>
              <TvIcon />
            </ListItemIcon>
            <ListItemText primary="Mobile" />
          </ListItem>
          <ListItem
            button
            className={classes.nested}
            component={RouterLink}
            to="/app/cons"
          >
            <ListItemIcon>
              <TvIcon />
            </ListItemIcon>
            <ListItemText primary="Consumer" />
          </ListItem>
          <ListItem
            button
            className={classes.nested}
            component={RouterLink}
            to="/app/ent"
          >
            <ListItemIcon>
              <TvIcon />
            </ListItemIcon>
            <ListItemText primary="Enterprise" />
          </ListItem>
          <ListItem
            button
            className={classes.nested}
            component={RouterLink}
            to="/app/wib"
          >
            <ListItemIcon>
              <TvIcon />
            </ListItemIcon>
            <ListItemText primary="Wholesale" />
          </ListItem>
        </List>
      </Collapse>

      <ListItem button onClick={handleFUClick}>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary="FU Transformation" />
        {fuopen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={fuopen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem
            button
            className={classes.nested}
            component={RouterLink}
            to="/app/db"
          >
            <ListItemIcon>
              <TvIcon />
            </ListItemIcon>
            <ListItemText primary="Digital Business" />
          </ListItem>
          <ListItem
            button
            className={classes.nested}
            component={RouterLink}
            to="/app/nits"
          >
            <ListItemIcon>
              <TvIcon />
            </ListItemIcon>
            <ListItemText primary="NITS" />
          </ListItem>
          <ListItem
            button
            className={classes.nested}
            component={RouterLink}
            to="/app/fin"
          >
            <ListItemIcon>
              <TvIcon />
            </ListItemIcon>
            <ListItemText primary="Finance" />
          </ListItem>
          <ListItem
            button
            className={classes.nested}
            component={RouterLink}
            to="/app/hcm"
          >
            <ListItemIcon>
              <TvIcon />
            </ListItemIcon>
            <ListItemText primary="Human Capital" />
          </ListItem>
          <ListItem
            button
            className={classes.nested}
            component={RouterLink}
            to="/app/sp"
          >
            <ListItemIcon>
              <TvIcon />
            </ListItemIcon>
            <ListItemText primary="Strategy" />
          </ListItem>
          <ListItem
            button
            className={classes.nested}
            component={RouterLink}
            to="/app/gct"
          >
            <ListItemIcon>
              <TvIcon />
            </ListItemIcon>
            <ListItemText primary="GCT" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
};

export default SideMenu;
