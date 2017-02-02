import * as React from "react";
import { createContainer } from "meteor/react-meteor-data";
import { ChatApp, ChatAppProps } from "../components/ChatApp";
import { ChatRoom, Message } from "../../common/ChatRoomApi";
import { ReactiveVar } from "meteor/reactive-var";

const chatRoom = new ReactiveVar('1');
(window as any).chatRoom=chatRoom;
export const DemoMeteorApp = createContainer<void>(function ():ChatAppProps {
    const chatRooms:ChatRoom[] = [
        { _id:'1', name:'chat 1'},
        { _id:'2', name:'chat 2'},
        { _id:'3', name:'chat 3'},
    ];
    const messages:Message[] = [];

    return {
        currentChatRoomId: chatRoom.get(),
        chatRooms: chatRooms,
        messages: messages,
        loggedIn: true
    };
}, ChatApp);
