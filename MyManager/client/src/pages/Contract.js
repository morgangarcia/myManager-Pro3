import React from 'react';
import Contractor from "../components/Contractor";
//import Item from "../models/Item";
import Card from "../components/Card";
import { BrowserRouter as Router, Route, } from "react-router-dom";

class Contract extends React {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         savedItem: []
    //     }
    // }

//     componentWillMount() {
//         Item.getItem().then(
//             (response) => {
//                 this.setState({ savedItem: response.data });
//             }
//         ).catch(
//             (err) => {
//                 console.log(err);
//             }
//         );
//     }

//     render() {
//         console.log(this.state.savedItem);
//         return (
//             <main>
//                 <Router>
//                     <div>

//                         {/* <ItemModal /> */}

//                         <Route exact path="/component/card" component={Card} />
//                         <Route exact path="/component/contractor" component={Contractor} />
//                         {/* <Route exact path="/resultscontainer" component={ResultsContainer} /> */}

//                     </div>
//                 </Router>
//             </main>
//         );
//     }
// }

export default Contract;
