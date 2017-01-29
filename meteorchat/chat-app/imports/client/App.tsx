import * as React from "react";
import { getMessages } from "../common/Messages";
import { Col, Grid, Row } from "react-bootstrap";
import { TopBar } from "./TopBar";
import { BottomBar } from "./BottomBar";
import { MessageList } from "./MessageList";
import { ChatRoomsSelector } from "./ChatRoomsSelector";
import { getChatRooms } from "../common/ChatRooms";


export class App extends React.Component<void,void> {

    render () {

        return (
            <div>
                <TopBar fixedTop/>
                {/* This is totally annoying: to get the top border correctly we simply duplicate the navigation*/}
                <TopBar/>
                <Grid>
                    <Row>
                        <Col sm={2} md={3}>
                            <ChatRoomsSelector chatRooms={getChatRooms(5)} currentChatRoomId="3"/>
                        </Col>
                        <Col sm={10} md={9}>
                            <MessageList messages={getMessages(100)}/>
                        </Col>
                    </Row>
                </Grid>
                <BottomBar />
            </div>

        );
    }
}
