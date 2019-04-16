


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
            <Container >
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Name</Label>
                        <Input type="name"
                            name="name"
                            id="exampleEmail"
                            placeholder="Contractor Name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />

                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Occupation</Label>
                        <Input type="occupationName" name="occupationName" id="examplePassword" placeholder="Occupation Title" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleFile">1099</Label>
                        <Input
                            type="file"
                            name="taxform"
                            id="exampleFile"

                            onChange={this.handleChange}
                        />
                        <FormText color="muted">
                            Upload 10-99
                    </FormText>

                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleFile">Invoice</Label>
                        <Input
                            type="file"
                            name="invoice"
                            id="exampleFile"
                            onChange={this.handleChange}

                        />
                        <FormText color="muted">
                            Upload Invoice
                        </FormText>

                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleFile">rider</Label>
                        <Input
                            type="file"
                            name="rider"
                            id="exampleFile"
                            onChange={this.handleChange}
                        />
                        <FormText color="muted">
                            Upload Rider/Contract Details

                    </FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleFile">img</Label>
                        <Input
                            type="file"
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
                                    type="radio"
                                    name="offeron"
                                    onChange={this.handleChange}
                                />{' '}
                                Select If You Want a "Make An Offer" Option
            </Label>
                        </FormGroup>
                        {/* <FormGroup>
                            <Label for="exampleText">Text Area</Label>
                            <Input
                                type="textarea"
                                name="textarea"
                                id="exampleText"
                                placeholder="Contractor Message Goes Here"
                                onCHange={this.handleChange}
                            />
                        </FormGroup> */}

                    </FormGroup>


                    <Button color="primary"
                        style={{ marginBotttom: '2rem' }}
                        onClick={() => {
                            const name = prompt('Enter Item');
                            if (name) {
                                this.setState(state => ({
                                    items: [...state.items, { id: name }]
                                }));
                            }
                        }}>Submit</Button>

                </Form>
            </Container>

        );
    }
}


export default Profile; 
