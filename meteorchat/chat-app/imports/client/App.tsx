import * as React from "react";
import { ChatRoom, chatRooms, sendMessage, setCurrentChatRoom } from "../common/ChatRooms";
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
    private sendMessage(message:string) {
        sendMessage(this.state.currentChatRoomId,message);
        this.setState({
            chatRooms:chatRooms
        });
    }
    render () {

        return (
            <ChatApp
                currentChatRoomId={this.state.currentChatRoomId}
                chatRooms={this.state.chatRooms}
                gotoChatRoom={this.gotoChatRoom.bind(this)}
                sendMessage={this.sendMessage.bind(this)}
            />

        );
    }
}
