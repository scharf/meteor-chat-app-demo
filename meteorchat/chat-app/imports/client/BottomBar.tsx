import * as React from "react";
import { Navbar, FormGroup, FormControl } from "react-bootstrap";

interface NavigationProperties {
    fixedTop?:boolean;
    sendMessage:(message:string)=>void;

}

export class BottomBar extends React.Component<NavigationProperties,void> {
    sendMessageHandler (event: React.SyntheticEvent<HTMLInputElement>) {
        const message = event.currentTarget.value;
        this.props.sendMessage(message);

    }
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
                            <FormControl type="text" placeholder="Message" onBlur={this.sendMessageHandler.bind(this)}/>
                        </FormGroup>
                        {' '}
                    </Navbar.Form>
                </Navbar.Collapse>
            </Navbar>

        );
    }
}
