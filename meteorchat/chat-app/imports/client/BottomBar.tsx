import * as React from "react";
import { FormControl, FormGroup, InputGroup, Navbar } from "react-bootstrap";

interface NavigationProperties {
    sendMessage:(message:string) => void;

}

interface NavigationState {
    newMessage:string;
}

export class BottomBar extends React.Component<NavigationProperties,NavigationState> {
    constructor (props:NavigationProperties) {
        super(props);
        this.state = {
            newMessage: ''
        }
    }

    onChange (event:React.SyntheticEvent<HTMLInputElement>) {
        this.setState({
            newMessage: event.currentTarget.value
        });

    }

    handleKeyPress (target:React.KeyboardEvent<HTMLInputElement>) {
        if (target.charCode == 13) {
            this.props.sendMessage(this.state.newMessage);
            this.setState({ newMessage: '' });
        }
    }

    render () {
        return (
            <Navbar fixedBottom>
                <Navbar.Form>
                    <FormGroup style={{ width: '100%' }}>
                        <InputGroup style={{ width: '100%' }}>
                            <InputGroup.Addon style={{ width: '34px' }}>+</InputGroup.Addon>
                            <FormControl type="text"
                                         placeholder="Message"
                                         value={this.state.newMessage}
                                         onKeyPress={this.handleKeyPress.bind(this)}
                                         onChange={this.onChange.bind(this)}
                            />
                        </InputGroup>
                    </FormGroup>
                </Navbar.Form>
            </Navbar>

        );
    }
}
