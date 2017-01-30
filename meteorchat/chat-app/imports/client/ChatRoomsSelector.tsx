import * as React from "react";
import {
    Badge,
    Button,
    Form,
    FormControl,
    FormGroup,
    InputGroup,
    ListGroup,
    ListGroupItem
} from "react-bootstrap";
import { ChatRoom, actions } from "../common/ChatRoomApi";

interface ChatRoomsProperties {
    chatRooms:ChatRoom[];
    currentChatRoomId:string;
}

export class ChatRoomsSelector extends React.Component<ChatRoomsProperties,void> {
    private renderChatRooms () {
        return this.props.chatRooms.map((chatRoom) => (
            <ListGroupItem
                key={chatRoom._id}
                active={this.props.currentChatRoomId == chatRoom._id}
                onClick={() => actions.gotoChatRoom(chatRoom._id)}
            >
                <b>{chatRoom.name}</b>
                <Badge>{chatRoom.newMessages}</Badge>
            </ListGroupItem>
        ));
    }

    render () {
        return (
            <div>
                <Form>
                    <FormGroup controlId="formInlineName">
                        <FormControl type="text" placeholder="New Group"/>
                        <InputGroup.Button>
                            <Button onClick={() => actions.createChatRoom('Chat Room')}>Add</Button>
                        </InputGroup.Button>
                    </FormGroup>
                </Form>
                <ListGroup>
                    {this.renderChatRooms()}
                </ListGroup>
            </div>
        );
    }
}
