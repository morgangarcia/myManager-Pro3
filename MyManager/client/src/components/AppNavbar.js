import React from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,

} from 'reactstrap';


class AppNavbar extends React.Component {
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
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <NavbarBrand href="/" className="mr-auto">myManager</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="/">Login</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/Profile/">Profile</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/Contractor/">Contractor</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/Payment/">Payment</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
// state = {
//     isOpen: false
// }
// toggle = () => {
//     this.setState({
//         isOpen: !this.state.isOpen
//     });
// }
// render() {
//     return (
//         <div>
//             <Navbar color="dark" dark expand="sm" className="mb-5">
//                 <Container>
//                     <NavbarBrand href="/">myManager</NavbarBrand>
//                     <NavbarToggler onClick={this.toggle} />
//                     <Collapse isopen={this.state.isOPen} navbar>
//                         <Nav className="ml-auto" navbar>
//                             <NavItem>
//                                 <NavLink href="https://github.com/morgangarcia">
//                                     Github
//                                 </NavLink>
//                             </NavItem>
//                             <NavItem>
//                                 <NavLink href="/components/">Login</NavLink>
//                             </NavItem>
//                             <NavItem>
//                                 <NavLink href="/components/">Profile</NavLink>
//                             </NavItem>
//                             <NavItem>
//                                 <NavLink href="/components/">Contractor</NavLink>
//                             </NavItem>
//                             <NavItem>
//                                 <NavLink href="/components/">Payment</NavLink>
//                             </NavItem>
//                         </Nav>
//                     </Collapse>
//                 </Container>
//             </Navbar>
//         </div >
//     );

// }

export default AppNavbar;



