


import React, { Component } from 'react';
//import axios from 'axios';

import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
//import uuid from 'uuid';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import PropTypes from 'prop-types';
import ItemModal from '/components/ItemModal';
class Profile extends Component {
    componentDidMount() {
        this.props.getItems();
    }
    //constructor(props) {
    //super(props);
    //this.state = [

    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }
    // handleChange(event) {

    //     this.setState({ [event.target.value]: event.target.value });
    // }

    // handleSubmit(event) {

    //     event.preventDefault();
    //     axios.post('/Profile', this.state)
    //         .then(res => console.log('axios response', res))
    //         .catch(err => console.log(err))
    // }
    render() {
        const { items } = this.props.items;
        return (
            <Container >
                <ItemModal />
                <Form>
                    <Input placeholder="Name" bsSize="sm" />
                    <Input placeholder="Occupation" bsSize="sm" />

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
                                    type="radio"
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
                        onClick={() => {
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

        );
    }
}

Profile.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(mapStateToProps, { getItems })(Profile); 
