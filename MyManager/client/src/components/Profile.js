


import axios from 'axios';
import React from 'react';
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            occupationName: '',
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

        this.setState({ [event.target.value]: event.target.value });
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


                    <Button onSubmit={this.handleSubmit}
                        color="primary">Proceed</Button>

                </Form>
            </Container>

        );
    }
}


export default Profile; 
