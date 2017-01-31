import * as React from "react";
import { createContainer } from 'meteor/react-meteor-data';
import { ChatRooms, getCurrentChatRoomId, Messages } from "../common/ChatRooms";
import { ChatApp, ChatAppProps } from "./ChatApp";
import { Meteor } from "meteor/meteor";
import { actions } from "../common/ChatRoomApi";
import { Tracker } from "meteor/tracker";
import * as Elizabot from 'elizabot';

export const MeteorApp = createContainer<void>(function():ChatAppProps {
    Meteor.subscribe('chatRoomPublication');
    const chatRooms = ChatRooms.find().fetch();
    let currentChatRoomId = getCurrentChatRoomId();
    if(!currentChatRoomId && chatRooms.length) {
        currentChatRoomId = chatRooms[0]._id;
    }
    const loggedIn = Meteor.userId()!=null;
    Meteor.subscribe('messagePublication',currentChatRoomId);
    const messages = Messages.find(
        {chatRoomId:currentChatRoomId},
        { sort: { createdAt: -1 }}
    ).fetch();
    return {
        currentChatRoomId,
        chatRooms:chatRooms,
        messages:messages.reverse(),
        loggedIn
    };
}, ChatApp);

// we expose a few objects for playing in the console
(window as any).actions = actions;
(window as any).Messages = Messages;
(window as any).ChatRooms = ChatRooms;
(window as any).getCurrentChatRoomId = getCurrentChatRoomId;
(window as any).Elizabot = Elizabot;

// Tracker.autorun(function(){
//     const currentChatRoomId = getCurrentChatRoomId();
//     const messages = Messages.find({chatRoomId:currentChatRoomId}).fetch();
//     const chatRooms = ChatRooms.find({}).fetch();
//     console.log('autorun', JSON.stringify({currentChatRoomId,chatRooms,messages}, null, 2));
// })

