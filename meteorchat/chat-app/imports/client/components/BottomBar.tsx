import * as React from "react";
import { FormControl, FormGroup, InputGroup } from "react-bootstrap";
import { actions } from "../../common/ChatRoomApi";

interface NavigationProperties {
    chatRoomId:string;
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
            actions.sendMessage(this.props.chatRoomId, this.state.newMessage);
            this.setState({ newMessage: '' });
        }
    }

    render () {
        return (

            <FormGroup id='message-input'>
                <InputGroup style={{ width: '100%' }}>
                    <InputGroup.Addon>+</InputGroup.Addon>
                    <FormControl type="text"
                                 placeholder="Message"
                                 value={this.state.newMessage}
                                 onKeyPress={this.handleKeyPress.bind(this)}
                                 onChange={this.onChange.bind(this)}
                    />
                </InputGroup>
            </FormGroup>

        );
    }
}
