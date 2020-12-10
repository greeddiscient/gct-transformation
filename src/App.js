import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Header} from './components/header/header.component' 
import Sidebar from './components/sidebar/sidebar.component' 

function App() {
  return (
    <Router>
      <Header></Header>
      <Sidebar></Sidebar>
      <Switch>
        <Route exact path="/" />
        <Route path="/cfu/mob"  />
        <Route path="/cfu/ent"  />
        <Route path="/cfu/cons"  />
        <Route path="/cfu/wib"  />
      </Switch>
    </Router>
  );
}

export default App;
