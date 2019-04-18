import React, { Component } from 'react';
import AppNavbar from "./components/AppNavbar";
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Payment from "./components/Payment";
import Contractor from "./components/Contractor";
//import ResultsContainer from "./components/ResultsContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



const App = () => (
  <Router>
    <div>
      <AppNavbar />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/contractor" component={Contractor} />
        {/* <Route exact path="/resultscontainer" component={ResultsContainer} /> */}
      </Switch>
    </div>
  </Router>


);

export default App;

