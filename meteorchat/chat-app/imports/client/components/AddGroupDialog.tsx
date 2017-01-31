import * as React from "react";
import { Button, ControlLabel, FormControl, FormGroup, Modal } from "react-bootstrap";
import { actions } from "../../common/ChatRoomApi";

interface AddGroupDialogProps {
    show?:boolean;
    close():void;
}
interface AddGroupDialogState {
    value:string;
}
export class AddGroupDialog extends React.Component<AddGroupDialogProps,AddGroupDialogState> {
    constructor () {
        super()
        this.state = {
            value: ''
        }
    }

    onChange (event:React.SyntheticEvent<HTMLInputElement>) {
        this.setState({
            value: event.currentTarget.value
        });
    }

    done () {
        actions.createChatRoom(this.state.value || "Group");
        this.props.close();
    }

    render () {
        return (
            <Modal show={this.props.show} onHide={this.props.close}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Chat Room</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <FormGroup
                            controlId="formBasicText"
                        >
                            <ControlLabel>Chat Room Name</ControlLabel>
                            <FormControl
                                type="text"
                                value={this.state.value}
                                placeholder="Enter Chat Group Name"
                                onChange={this.onChange.bind(this)}
                            />
                            <FormControl.Feedback />
                        </FormGroup>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.close}>Cancel</Button>
                    <Button bsStyle="primary" onClick={this.done.bind(this)}>Save</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
