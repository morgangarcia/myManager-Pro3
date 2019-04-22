import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import PropTypes from 'prop-types';



class Login extends Component {
    componentDidMount() {
        this.props.getItems();
    }
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {

        switch (event.target.id) {
            case "email":
                this.setState({ email: event.target.value }, () => {
                    console.log(this.state.email);
                });
                break;
            case "password":
                this.setState({ password: event.target.value }, () => {
                    console.log(this.state.password);
                });
                break;
            default:

            //this.setState({ email: event.target.value });
        }
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
                    <Input placeholder="email@gmail.com" bsSize="sm" id="email" onChange={this.handleChange} />
                    <Input placeholder="password" bsSize="sm" id="password" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="examplePassword" className="mr-sm-2">Password</Label>
                    {/* <Input
                        type="password"
                        name="password"
                        id="examplePassword"
                        placeholder="don't tell!"
                        value={this.state.password}
                        onChange={this.handleChange} /> */}
                </FormGroup>

                <Button Submit={this.handleSubmit}
                    color="primary">SignIn</Button>

                <Button Submit={this.handleSubmit}
                    color="warning">SignUp</Button>
            </Form>
        );
    }
}

Login.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(mapStateToProps, { getItems })(Login);
//export default Login;