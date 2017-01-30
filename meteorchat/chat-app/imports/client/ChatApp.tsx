import * as React from "react";
import { Col, Grid, Row } from "react-bootstrap";
import { TopBar } from "./TopBar";
import { BottomBar } from "./BottomBar";
import { MessageList } from "./MessageList";
import { ChatRoomsSelector } from "./ChatRoomsSelector";
import { ChatRoom, Message } from "../common/ChatRoomApi";

export interface ChatAppProps {
    currentChatRoomId:string;
    chatRooms:ChatRoom[];
    messages:Message[];
    loggedIn:boolean;
}

export class ChatApp extends React.Component<ChatAppProps,void> {

    render () {
        return (
            <div>
                <TopBar/>
                {this.props.loggedIn && <Grid style={{ marginBottom: 51, marginTop: 60 }}>
                    <Row>
                        <Col sm={2} md={3}>
                            <ChatRoomsSelector
                                chatRooms={this.props.chatRooms}
                                currentChatRoomId={this.props.currentChatRoomId}
                            />
                        </Col>
                        <Col sm={10} md={9}>
                            <MessageList messages={this.props.messages}/>
                        </Col>
                    </Row>
                </Grid>
                }
                <BottomBar chatRoomId={this.props.currentChatRoomId} />
            </div>

        );
    }
}
