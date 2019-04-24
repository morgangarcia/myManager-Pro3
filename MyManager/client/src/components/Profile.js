


import React, { Component } from 'react';
//import axios from 'axios';

import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import ItemModal from './ItemModal';
import ItemModalADDINFO from './ItemModalADDINFO';
import ItemModalOccupation from './ItemModalOccupation';
import ItemModalRTLPrice from './ItemModalRTLPrice';

import jwt_decode from 'jwt-decode';



// import { connect } from 'react-redux';
// import { getItems } from '../actions/itemActions';
// import PropTypes from 'prop-types';



class Profile extends Component {
    constructor() {
        super();

        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            contractorOccupation: "",
            taxform: "", //these next 3 are files and may not actually be strings
            rider: "",
            contractorImage: "",
            makeOffer: false
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            first_name: decoded.first_name,
            last_name: decoded.last_name,
            email: decoded.email

        })
    }



    //this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);


    // handleChange(event) {
    //     console.log(event.target.checked); //just for the checkbox

    //     switch (event.target.id) {
    //         case "contractorName":
    //             this.setState({ contractorName: event.target.value }, () => {
    //                 console.log(this.state.contractorName);
    //             });
    //             break;
    //         case "contractorOccupation":
    //             this.setState({ contractorOccupation: event.target.value }, () => {
    //                 console.log(this.state.contractorOccupation);
    //             });
    //             break;
    //         case "taxform":
    //             this.setState({ taxform: event.target.value }, () => {
    //                 console.log(this.state.taxform);
    //             });
    //             break;
    //         case "rider":
    //             this.setState({ rider: event.target.value }, () => {
    //                 console.log(this.state.rider);
    //             });
    //             break;
    //         case "contractorImage":
    //             this.setState({ contractorImage: event.target.value }, () => {
    //                 console.log(this.state.contractorImage);
    //             });
    //             break;
    //             default:

    //   }
    // console.log("anybody ome?")
    // this.setState({ [event.target.value]: event.target.value });


    // handleSubmit(eventisRequired) {
    // //this method is going to send the entire "this.state" object as our data object in the request
    //     event.preventDefault();
    //     axios.post('/Profile', this.state)
    //         .then(res => console.log('axios response', res))
    // }
    //         .catch(err => console.log(err))
    render() {

        //const { items } = this.props.items;
        return (
            <Container>
                <div className='container'>
                    <div className='jumbotron mt-5'>
                        <div className='col-sm-8 mx-auto'>
                            <h1 className="text-center">Profile</h1>
                        </div>
                        <table className="table col-md-6 mx-auto">
                            <tbody>
                                <tr>
                                    <td>First Name</td>
                                    <td>{this.state.first_name}</td>
                                    <td>Last Name</td>
                                    <td>{this.state.last_name}</td>
                                </tr>
                                <tr>
                                    <td>mail</td>
                                    <td>{this.state.email}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


                <ItemModal />
                <ItemModalOccupation />
                <ItemModalRTLPrice />
                <ItemModalADDINFO />
                <Form>

                    <FormGroup>
                        <Label for="exampleFile">1099</Label>
                        <Input
                            type="file"
                            name="taxform"
                            id="exampleFile"
                            onChange={this.handleChange} />
                        <FormText color="muted">
                            Upload file
          </FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label for="Img">Img</Label>
                        <Input
                            type="file"
                            name="img"
                            id="exampleFile"
                            onChange={this.handleChange}
                        />
                        <FormText color="muted">
                            Contractor Image
          </FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label for="Rider">Rider</Label>
                        <Input
                            type="file"
                            name="img"
                            id="exampleFile"
                            onChange={this.handleChange} />
                        <FormText color="muted">
                            Rider
                    </FormText>
                    </FormGroup>

                    <FormGroup tag="fieldset">
                        <legend>Make An Offer Option</legend>
                        <FormGroup check>
                            <Label check>
                                <Input
                                    type="checkbox"
                                    name="offeron"
                                    onChange={this.handleChange}
                                />{' '}
                                Select If You Want a "Make An Offer" Option
                             </Label>
                        </FormGroup>


                    </FormGroup>


                    <Button
                        color="dark"
                        style={{ marginBottom: '2rem' }}
                        Submit={() => {
                            const name = prompt('enter Item');
                            if (name) {
                                this.setState(state => ({
                                    items: [...state.items, { name }]
                                }));

                            }
                        }}
                    >
                        Add Contractor
                    </Button>
                </Form>
            </Container>

        )
    }
}


export default Profile 
