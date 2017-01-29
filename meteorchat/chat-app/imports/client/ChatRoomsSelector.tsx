import * as React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { ChatRoom } from "../common/ChatRooms";

interface ChatRoomsProperties {
    chatRooms:ChatRoom[];
    currentChatRoomId:string;
    gotoChatRoom:(charRoomId:string)=>void;
}

export class ChatRoomsSelector extends React.Component<ChatRoomsProperties,void> {
    private renderChatRooms () {
        return this.props.chatRooms.map((chatRoom) => (
            <ListGroupItem
                key={chatRoom._id}
                active={this.props.currentChatRoomId==chatRoom._id}
                onClick={() => this.props.gotoChatRoom(chatRoom._id)}
            >
                {chatRoom.name}
            </ListGroupItem>
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
