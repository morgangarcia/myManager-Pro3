import React, { Component } from 'react';
import AppNavbar from "./components/AppNavbar";
//import Profile from "./components/Profile";
import Login from "./components/Login";


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <AppNavbar />
        <Login />




      </div>
    );
  }
}

export default App;
