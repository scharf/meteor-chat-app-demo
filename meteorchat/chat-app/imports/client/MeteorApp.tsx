import * as React from "react";
import { createContainer } from 'meteor/react-meteor-data';
import { chatRoomActions, ChatRooms, getCurrentChatRoomId, Messages } from "../common/ChatRooms";
import { ChatApp, ChatAppProps } from "./ChatApp";
import { Meteor } from "meteor/meteor";


export const MeteorApp = createContainer<void>(function():ChatAppProps {
    const currentChatRoomId = getCurrentChatRoomId();
    const messages = Messages.find({chatRoomId:currentChatRoomId}).fetch();
    const chatRooms = ChatRooms.find({}).fetch();
    const loggedIn = Meteor.userId()!=null;
    return {
        currentChatRoomId,
        chatRooms:chatRooms,
        actions:chatRoomActions,
        messages,
        loggedIn
    };
}, ChatApp);
