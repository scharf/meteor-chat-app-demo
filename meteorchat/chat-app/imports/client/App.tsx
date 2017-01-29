import * as React from "react";
import { createMessages, Message } from "../common/Messages";
import { ChatRoom, chatRooms, setCurrentChatRoom } from "../common/ChatRooms";
import { ChatApp } from "./ChatApp";

interface AppState {
    currentChatRoomId:string;
    chatRooms:ChatRoom[];
}

export class App extends React.Component<void,AppState> {
    constructor () {
        super();
        this.state = {
            currentChatRoomId: '1',
            chatRooms: chatRooms,
        }
    }
    private gotoChatRoom(id:string) {
        setCurrentChatRoom(id);
        this.setState({
            currentChatRoomId:id
        });
    }
    render () {

        return (
            <ChatApp
                currentChatRoomId={this.state.currentChatRoomId}
                chatRooms={this.state.chatRooms}
                gotoChatRoom={this.gotoChatRoom.bind(this)}
            />

        );
    }
}
