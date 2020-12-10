import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink
} from "react-router-dom";
import SlideFrame from './components/SlideFrame'
import { AppBar,Toolbar , Container, Drawer, Divider,CssBaseline} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText'
import gctlogo from './img/gctlogo.png'
import { makeStyles } from "@material-ui/core/styles"
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AddIcon from '@material-ui/icons/Add';
import TvIcon from '@material-ui/icons/Tv';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

const drawerWidth = 240;
const LinkBehavior = React.forwardRef((props, ref) => (
  <RouterLink ref={ref} to="/getting-started/installation/" {...props} />
));
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  logo:{
    height: `10vh`
  },
  navContainer:{
    display: 'flex',
    padding: 'auto'
  },
  header:{
    fontSize: '1.5em'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

  nested: {
    paddingLeft: theme.spacing(4),
  },

}));
function App() {
  const classes = useStyles();
  const [fuopen, setfuOpen] = React.useState(false);
  const [cfuopen, setcfuOpen] = React.useState(false);
  const [period, setPeriod] = React.useState('Oct 2020');
  const handleSelectChange = (event) => {
    setPeriod(event.target.value);
  };

  const handleGroupClick=()=>{
    setfuOpen(false)
    setcfuOpen(false)
  }
  const handleFUClick = () => {
    setfuOpen(!fuopen);
    setcfuOpen(false)
  };
  const handleCFUClick = () => {
    setcfuOpen(!cfuopen);
    setfuOpen(false)
  };
  return (
    <Router>
      <AppBar color='primary' position = 'static'>
        <Toolbar>

        </Toolbar>
      </AppBar>
      <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Container className={classes.navContainer}>
              
              <div className={classes.header}>
                Transformation Dashboard
              </div>  
          </Container>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar}>
        <img src = {gctlogo} alt = "GCT" className={classes.logo}></img>
        </div>
        
        <Divider />
        <List>
          <ListItem button key= '0'>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Period:</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value = {period}
                onChange = {handleSelectChange}
              >
                <MenuItem value={10}>Oct 2020</MenuItem>
              </Select>
            </FormControl>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button onClick={handleGroupClick} key="group" component = {RouterLink} to='/'>
            <ListItemIcon><TvIcon/></ListItemIcon>
            <ListItemText primary="Group Transformation"  />
          </ListItem>

          <ListItem button onClick={handleCFUClick}>
            <ListItemIcon>
              <AddIcon/>
            </ListItemIcon>
            <ListItemText primary="CFU Transformation" />
            {cfuopen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={cfuopen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested} component = {RouterLink} to='/mob'>
                <ListItemText primary="Mobile"/>
              </ListItem>
              <ListItem button className={classes.nested} component = {RouterLink} to='/cons'>
                <ListItemText primary="Consumer" />
              </ListItem>
              <ListItem button className={classes.nested} component = {RouterLink} to='/ent'>
                <ListItemText primary="Enterprise" />
              </ListItem>
              <ListItem button className={classes.nested} component = {RouterLink} to='/wib'>
                <ListItemText primary="Wholesale" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={handleFUClick}>
            <ListItemIcon>
              <AddIcon/>
            </ListItemIcon>
            <ListItemText primary="FU Transformation" />
            {fuopen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={fuopen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}component = {RouterLink} to='/db'>
                <ListItemText primary="Digital Business" />
              </ListItem>
              <ListItem button className={classes.nested}component = {RouterLink} to='/nits'>
                <ListItemText primary="NITS" />
              </ListItem>
              <ListItem button className={classes.nested}component = {RouterLink} to='/fin'>
                <ListItemText primary="Finance" />
              </ListItem>
              <ListItem button className={classes.nested}component = {RouterLink} to='/hcm'>
                <ListItemText primary="Human Capital" />
              </ListItem>
              <ListItem button className={classes.nested}component = {RouterLink} to='/sp'>
                <ListItemText primary="Strategy" />
              </ListItem>
              <ListItem button className={classes.nested}component = {RouterLink} to='/gct'>
                <ListItemText primary="GCT" />
              </ListItem>
            </List>
          </Collapse>

        </List>
      </Drawer>
      <main className={classes.content}>
        <SlideFrame/>
      </main>
      </div>
      <Switch>
        <Route exact path="/" />
        <Route path="/mob"  />
        <Route path="/ent"  />
        <Route path="/cons"  />
        <Route path="/wib"  />
        <Route path="/db"  />
        <Route path="/nits"  />
        <Route path="/fin"  />
        <Route path="/hcm"  />
        <Route path="/sp"  />
        <Route path="/gct"  />
      </Switch>
    </Router>
  );
}
export default App;
