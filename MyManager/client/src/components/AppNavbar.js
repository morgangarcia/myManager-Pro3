import React from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink


} from 'reactstrap';


class AppNavbar extends React.Component {
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/')

    }

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }



    render() {
        const loginRegLink = (
            <ul classname="navbar-nav">
                <li className="nav-item">
                    <NavLink to="/login" clasName="nav-link">
                        Login
            </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/register" className="nav-link">
                        register
            </NavLink>
                </li>
            </ul>
        )
        const userLink = (
            <ul className="nav-bar">
                <li className="nav-item">
                    <NavLink to="/profile" className="nav-link">
                        User
                    </NavLink>
                </li>
                <li className="nav-item">
                    <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                        Logout
                    </a>
                </li>
            </ul>
        )

        const loggedIn = (
            <NavLink href="/">You are logged in</NavLink>
        );

        const notLoggedIn = (
            <NavLink href="/login">Login</NavLink>
        )


        return (

            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <NavbarBrand href="/" className="mr-auto">myManager</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                {localStorage.usertoken ? loggedIn : notLoggedIn}
                            </NavItem>
                            <NavItem>
                                <NavLink href="/profile">Profile</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/contractor">Contractor</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/payment">Payment</NavLink>
                            </NavItem>
                            {/* <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem> */}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}


export default AppNavbar;



