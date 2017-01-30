import * as React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import AccountsUIWrapper from "./AccountsUIWrapper";

interface NavigationProperties {
    fixedTop?:boolean;
}

export class TopBar extends React.Component<NavigationProperties,void> {

    render () {
        return (
            <Navbar fixedTop={this.props.fixedTop}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">React Bootstrap</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>

                    <Nav>
                        <NavItem onClick={()=>alert('aha')}>Add Group</NavItem>
                        <NavItem eventKey={1} href="#"><AccountsUIWrapper /></NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
