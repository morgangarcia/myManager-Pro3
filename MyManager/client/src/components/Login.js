import React, { Component } from 'react';
import { login } from './UserFunctions';
//import { Container } from 'reactstrap';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
    
        const user = {
            email: this.state.email,
            password: this.state.password
        }
        login(user).then(res => {
            if (res) {
                this.props.history.push('/profile')
            }
        });
    }

    render() {
        return (
            <div className="container" >
                <div className="row" >
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal"> Please Sign In</h1>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className="from-control"
                                    name="email"
                                    placeholder="Enter Email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="from-control"
                                    name="password"
                                    placeholder="Enter Password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn- btn-lg btn-primary btn-block"
                            >
                                SignIn
                         </button>
                        </form>
                    </div>
                </div>
            </div>

        )

    }
}


export default Login;



