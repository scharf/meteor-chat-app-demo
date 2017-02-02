import * as React from "react";
import { TopBar } from "./TopBar";
import { BottomBar } from "./BottomBar";
import { MessageList } from "./MessageList";
import { ChatRoomsSelector } from "./ChatRoomsSelector";
import { ChatRoom, Message } from "../../common/ChatRoomApi";


export interface ChatAppProps {
    currentChatRoomId:string;
    chatRooms:ChatRoom[];
    messages:Message[];
    loggedIn:boolean;
}

export class ChatApp extends React.Component<ChatAppProps,void> {

    render () {
        return (
            <div className="chat-wrap">
                <TopBar/>
                <div className="chat-main">
                    <div className="chat-aside">
                        <ChatRoomsSelector
                            chatRooms={this.props.chatRooms}
                            currentChatRoomId={this.props.currentChatRoomId}
                        />
                    </div>
                    <div className="chat-article">

                        <MessageList messages={this.props.messages}/>
                        {/* can be sed to scroll to bottom*/}
                        <div id="list-end"></div>
                    </div>
                </div>
                <BottomBar chatRoomId={this.props.currentChatRoomId}/>
            </div>
        );
    }
}
