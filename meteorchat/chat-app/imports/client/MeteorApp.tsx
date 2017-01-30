import * as React from "react";
import { createContainer } from 'meteor/react-meteor-data';
import { chatRoomActions, Messages } from "../common/ChatRooms";
import { ChatApp, ChatAppProps } from "./ChatApp";
import { ChatRoom } from "../common/ChatRoomApi";

const firstChatRoom:ChatRoom = {
    _id:'NoId',
    isSubscribed:false,
    name:' ChatRoom',
    newMessages:0,
}

export const MeteorApp = createContainer<void>(function():ChatAppProps {
    return {
        currentChatRoomId:'NoId',
        chatRooms:[firstChatRoom],
        actions:chatRoomActions,
        messages: Messages.find({}).fetch(),
    };
}, ChatApp);
