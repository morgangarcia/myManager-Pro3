import React, { Component } from 'react';
import AppNavbar from "./components/AppNavbar";
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Payment from "./components/Payment";
import Contractor from "./components/Contractor";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//class App extends Component(
//  render() 

const App = () => (
  <Router>
    <div>
      <AppNavbar />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/contractor" component={Contractor} />
      </Switch>
    </div>
  </Router>


);

export default App;

