import * as React from "react";
import { Navbar, FormGroup, FormControl } from "react-bootstrap";

interface NavigationProperties {
    fixedTop?:boolean;
}

export class BottomBar extends React.Component<NavigationProperties,void> {

    render() {
        return (
            <Navbar className="navbar-fixed-bottom">
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Brand</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Form>
                        <FormGroup>
                            <FormControl type="text" placeholder="Message"/>
                        </FormGroup>
                        {' '}
                    </Navbar.Form>
                </Navbar.Collapse>
            </Navbar>

        );
    }
}
