

import uuid from 'uuid';
import axios from 'axios';
import React from 'react';
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            taxform: '',
            invoice: '',
            rider: '',
            img: '',
            offeron: '',
            textarea: ''


        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {

        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {

        event.preventDefault();
        axios.post('/Profile', this.state)
            .then(res => console.log('axios response', res))
            .catch(err => console.log(err))
    }
    render() {

        return (
            <Container>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email"
                            name="email"
                            id="exampleEmail"
                            placeholder="with a placeholder"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />

                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleFile">File</Label>
                        <Input
                            type="taxform"
                            name="taxform"
                            id="exampleFile"

                            onChange={this.handleChange}
                        />
                        <FormText color="muted">
                            Upload 10-99
                    </FormText>

                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleFile">File</Label>
                        <Input
                            type="invoice"
                            name="invoice"
                            id="exampleFile"
                            onChange={this.handleChange}

                        />
                        <FormText color="muted">
                            Upload Invoice
                        </FormText>

                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleFile">File</Label>
                        <Input
                            type="rider"
                            name="rider"
                            id="exampleFile"
                            onChange={this.handleChange}
                        />
                        <FormText color="muted">
                            Upload Rider/Contract Details
    
                    </FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleFile">File</Label>
                        <Input
                            type="img"
                            name="img"
                            id="exampleFile"
                            onChange={this.handleChange}
                        />
                        <FormText color="muted">
                            Upload Contractor Image.jpg
    
                    </FormText>
                    </FormGroup>
                    <FormGroup tag="fieldset">
                        <legend>Make An Offer Option</legend>
                        <FormGroup check>
                            <Label check>
                                <Input
                                    type="offeron"
                                    name="offeron"
                                    onChange={this.handleChange}
                                />{' '}
                                Select If You Want a "Make An Offer" Option
            </Label>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleText">Text Area</Label>
                            <Input
                                type="textarea"
                                name="textarea"
                                id="exampleText"
                                placeholder="Contractor Message Goes Here"
                                onCHange={this.handleChange}
                            />
                        </FormGroup>

                    </FormGroup>


                    <Button color="primary"
                        style={{ marginBotttom: '2rem' }}
                        onClick={() => {
                            const name = prompt('Enter Item');
                            if (name) {
                                this.setState(state => ({
                                    items: [...state.items, { id: uuid(), name }]
                                }));
                            }
                        }}>Submit</Button>
                </Form>
            </Container>

        );
    }
}


export default Profile; 
