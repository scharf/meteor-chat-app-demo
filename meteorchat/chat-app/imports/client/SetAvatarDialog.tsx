import * as React from "react";
import { FormGroup, ControlLabel, FormControl,Modal,Button } from "react-bootstrap";
import { actions } from "../common/ChatRoomApi";

interface SetAvatarDialogProps {
    show?:boolean;
    close():void;
}
interface SetAvatarDialogState {
    value:string;
}
export class SetAvatarDialog extends React.Component<SetAvatarDialogProps,SetAvatarDialogState> {
    constructor() {
        super()
        this.state ={
            value:''
        }
    }
    onChange (event:React.SyntheticEvent<HTMLInputElement>) {
        this.setState({
            value: event.currentTarget.value
        });
    }
    done() {
        actions.setAvatar(this.state.value);
        this.setState({
            value:''
        })
        this.props.close();
    }
    render () {
        return (
            <Modal show={this.props.show} onHide={this.props.close}>
                <Modal.Header closeButton>
                    <Modal.Title>Set Avatar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <FormGroup
                            controlId="formBasicText"
                        >
                            <ControlLabel>Avatar URL</ControlLabel>
                            <FormControl
                                type="text"
                                value={this.state.value}
                                placeholder="Enter Avatar url"
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
