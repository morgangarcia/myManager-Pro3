import React from 'react';
import AppNavbar from "./components/AppNavbar";
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";
// import ItemModal from "./component/ItemModal";
import Payment from "./components/Payment";
import Contractor from "./components/Contractor";
import Landing from "./components/Landing";
import Register from "./components/Register";
//import ResultsContainer from "./components/ResultsContainer";
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



const App = (props) => (
  <Provider store={store}>
    <Router>
      <div>
        <AppNavbar />
        {/* <ItemModal /> */}
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/payment" component={Payment} />
          <Route exact path="/contractor" component={Contractor} />
          {/* <Route exact path="/resultscontainer" component={ResultsContainer} /> */}
        </Switch>
      </div>
    </Router>
  </Provider>


);

export default App;

