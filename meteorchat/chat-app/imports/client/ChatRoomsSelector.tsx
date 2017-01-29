import * as React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { ChatRoom } from "../common/ChatRooms";

interface ChatRoomsProperties {
    chatRooms:ChatRoom[];
    currentChatRoomId:string;
}

export class ChatRoomsSelector extends React.Component<ChatRoomsProperties,void> {
    private renderChatRooms () {
        return this.props.chatRooms.map((chatRooms) => (
            <ListGroupItem active={this.props.currentChatRoomId==chatRooms._id}>{chatRooms.name}</ListGroupItem>
        ));
    }

    render() {
        return (
            <ListGroup>
                {this.renderChatRooms()}
            </ListGroup>
        );
    }
}
