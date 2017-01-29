import * as React from "react";
import { MenuItem, Nav, Navbar, NavDropdown } from "react-bootstrap";

interface NavigationProperties {
    fixedTop?:boolean;
}

export class TopBar extends React.Component<NavigationProperties,void> {

    render() {
        return (
            <Navbar fixedTop={this.props.fixedTop}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">React-Bootstrap</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider/>
                        <MenuItem eventKey={3.3}>Separated link</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar>

        );
    }
}
