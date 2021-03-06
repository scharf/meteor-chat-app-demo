import * as React from "react";
import {
    chatRoomGetAll,
    chatRoomGetCurrentId,
    chatRoomMessages,
    registerChangeListener
} from "../../common/simple/SimpleChatRooms";
import { ChatApp } from "../components/ChatApp";
import { ChatRoom, Message } from "../../common/ChatRoomApi";

interface AppState {
    currentChatRoomId:string;
    chatRooms:ChatRoom[];
    messages:Message[];
}

export class StandaloneApp extends React.Component<void,AppState> {
    private unregister:Function;

    constructor () {
        super();
        this.state = {
            currentChatRoomId: chatRoomGetCurrentId(),
            chatRooms: chatRoomGetAll(),
            messages: chatRoomMessages(chatRoomGetCurrentId()),
        }
    }

    componentWillMount () {
        this.unregister = registerChangeListener(() => {
            this.setState({
                currentChatRoomId: chatRoomGetCurrentId(),
                chatRooms: chatRoomGetAll(),
                messages: chatRoomMessages(chatRoomGetCurrentId()),
            })
        })
    }

    componentWillUnmount () {
        if (this.unregister) {
            this.unregister();
        }
    }

    render () {
        return (
            <ChatApp
                currentChatRoomId={this.state.currentChatRoomId}
                chatRooms={this.state.chatRooms}
                messages={this.state.messages}
                loggedIn
            />

        );
    }
}
