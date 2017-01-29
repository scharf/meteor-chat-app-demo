import * as React from "react";
import {
    ChatRoom, chatRoomActionsActions, chatRoomGetAll,
    chatRoomGetCurrent,
    registerChangeListener
} from "../common/ChatRooms";
import { ChatApp } from "./ChatApp";

interface AppState {
    chatRoom:ChatRoom;
    chatRooms:ChatRoom[];
}

export class App extends React.Component<void,AppState> {
    private unregister:Function;

    constructor () {
        super();
        this.state = {
            chatRoom: chatRoomGetCurrent(),
            chatRooms: chatRoomGetAll(),
        }
    }

    componentWillMount () {
        this.unregister = registerChangeListener(() => {
            this.setState({
                chatRoom: chatRoomGetCurrent(),
                chatRooms: chatRoomGetAll(),
            })
        })
    }

    componentWillUnmount () {
        if (this.unregister) {
            this.unregister();
        }
    }

    render () {
        if (!this.state.chatRoom) {
            return null;
        }

        return (
            <ChatApp
                currentChatRoomId={this.state.chatRoom._id}
                chatRooms={this.state.chatRooms}
                messages={this.state.chatRoom.messages}
                actions={chatRoomActionsActions}
            />

        );
    }
}
