//import React, { Component } from 'react';
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Profile from "./Profile";
import Login from "./Login";
import Contractor from "./Contractor";
import Payment from "./Payment";


function AppRouter() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Login</Link>
                        </li>
                        <li>
                            <Link to="/Profile/">Profile</Link>
                        </li>

                        <li>
                            <Link to="/Contractor/">Contractor Search</Link>
                        </li>
                        <li>
                            <Link to="/Payment/">Payment</Link>
                        </li>
                    </ul>
                </nav>

                <Route path="/" exact component={Login} />
                <Route path="/Profile/" component={Profile} />
                <Route path="/Contractor/" component={Contractor} />
                <Route path="/Payment/" component={Payment} />
                {/* <Route path="/users/" component={Users} /> */}
            </div>
        </Router>
    );
}

export default AppRouter;
