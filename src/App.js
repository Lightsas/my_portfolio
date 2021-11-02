import AboutME from './component/home/aboutme/AboutME';
import ContactUs from './component/home/contact/ContactUs';
import ContactFrom from './component/home/contactFrom/ContactFrom';
import Future from './component/home/future/Future';
import Home from './component/home/home/Home';
import Nav from './component/home/navbar/Nav';
import Navbar from './component/home/navbar/Navbar';
import ProtfolioAll from './component/home/profolioAll/ProtfolioAll';
import Project from './component/home/project/Project';
import Protfolio from './component/home/protfolio/Protfolio';
import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Nav></Nav>
      <Switch>
        <Route exact path="/homee">
          <ProtfolioAll></ProtfolioAll>
        </Route>
        <Route path="/">
            <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
