import * as React from "react";
import { createContainer } from 'meteor/react-meteor-data';
import { ChatRooms, getCurrentChatRoomId, Messages } from "../common/ChatRooms";
import { ChatApp, ChatAppProps } from "./ChatApp";
import { Meteor } from "meteor/meteor";
import { actions } from "../common/ChatRoomApi";
import { Tracker } from "meteor/tracker";


export const MeteorApp = createContainer<void>(function():ChatAppProps {
    const currentChatRoomId = getCurrentChatRoomId();
    const messages = Messages.find({chatRoomId:currentChatRoomId}).fetch();
    const chatRooms = ChatRooms.find({}).fetch();
    const loggedIn = Meteor.userId()!=null;
    return {
        currentChatRoomId,
        chatRooms:chatRooms,
        messages,
        loggedIn
    };
}, ChatApp);

(window as any).actions = actions;

Tracker.autorun(function(){
    const currentChatRoomId = getCurrentChatRoomId();
    const messages = Messages.find({chatRoomId:currentChatRoomId}).fetch();
    const chatRooms = ChatRooms.find({}).fetch();
    console.log('autorun', JSON.stringify({currentChatRoomId,chatRooms,messages}, null, 2));
})
