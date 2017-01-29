import * as React from "react";
import { Col, Grid, Row } from "react-bootstrap";
import { TopBar } from "./TopBar";
import { BottomBar } from "./BottomBar";
import { MessageList } from "./MessageList";
import { ChatRoomsSelector } from "./ChatRoomsSelector";
import { ChatRoom, getChatRoom } from "../common/ChatRooms";

interface ChatAppProps {
    currentChatRoomId:string;
    chatRooms:ChatRoom[];
    gotoChatRoom:(charRoomId:string)=>void;
    sendMessage:(message:string)=>void;
}

export class ChatApp extends React.Component<ChatAppProps,void> {

    render () {
        return (
            <div>
                <TopBar fixedTop/>
                {/* This is totally annoying: to get the top border correctly we simply duplicate the navigation*/}
                <TopBar/>
                <Grid style={{marginBottom:51}}>
                    <Row>
                        <Col sm={2} md={3}>
                            <ChatRoomsSelector
                                chatRooms={this.props.chatRooms}
                                gotoChatRoom={this.props.gotoChatRoom}
                                currentChatRoomId={this.props.currentChatRoomId}
                            />
                        </Col>
                        <Col sm={10} md={9}>
                            <MessageList messages={getChatRoom(this.props.currentChatRoomId).messages}/>
                        </Col>
                    </Row>
                </Grid>
                <BottomBar sendMessage={this.props.sendMessage}/>
            </div>

        );
    }
}
