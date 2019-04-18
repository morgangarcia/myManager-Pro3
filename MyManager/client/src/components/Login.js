import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';





class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {

        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {

        event.preventDefault();
        axios.post('/Login', this.state)
            .then(res => console.log('axios response', res))
            .catch(err => console.log(err))
    }
    render() {
        return (
            <Form inline >
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                    <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="user@jesusmail.com"
                        value={this.state.email}

                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="examplePassword" className="mr-sm-2">Password</Label>
                    <Input
                        type="password"
                        name="password"
                        id="examplePassword"
                        placeholder="don't tell!"
                        value={this.state.password}
                        onChange={this.handleChange} />
                </FormGroup>

                <Button onSubmit={this.handleSubmit}
                    color="primary">SignIn</Button>

                <Button onSubmit={this.handleSubmit}
                    color="warning">SignUp</Button>
            </Form>
        );
    }
}


export default Login;