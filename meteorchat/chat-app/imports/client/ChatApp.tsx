import * as React from "react";
import { Col, Grid, Row } from "react-bootstrap";
import { TopBar } from "./TopBar";
import { BottomBar } from "./BottomBar";
import { MessageList } from "./MessageList";
import { ChatRoomsSelector } from "./ChatRoomsSelector";
import { ChatRoom } from "../common/ChatRooms";
import { Message } from "../common/Messages";
import { ChatRoomActions } from "../common/ChatRoomActions";

interface ChatAppProps {
    currentChatRoomId:string;
    chatRooms:ChatRoom[];
    messages:Message[];
    actions:ChatRoomActions;
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
                                actions={this.props.actions}
                                currentChatRoomId={this.props.currentChatRoomId}
                            />
                        </Col>
                        <Col sm={10} md={9}>
                            <MessageList messages={this.props.messages}/>
                        </Col>
                    </Row>
                </Grid>
                <BottomBar chatRoomId={this.props.currentChatRoomId} actions={this.props.actions}/>
            </div>

        );
    }
}
