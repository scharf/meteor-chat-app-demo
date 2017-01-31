import * as React from "react";
import { createContainer } from "meteor/react-meteor-data";
import { ChatRooms, Messages } from "../../common/mongo/ChatRooms";
import { ChatApp, ChatAppProps } from "../components/ChatApp";
import { Meteor } from "meteor/meteor";
import { getCurrentChatRoomId } from "../meteor-app-simple/SimpleReactiveChatRoomId";

export const MeteorApp = createContainer<void>(function ():ChatAppProps {
    Meteor.subscribe('chatRoomPublication');
    const chatRooms = ChatRooms.find().fetch();
    let currentChatRoomId = getCurrentChatRoomId();
    if (!currentChatRoomId && chatRooms.length) {
        currentChatRoomId = chatRooms[ 0 ]._id;
    }
    const loggedIn = Meteor.userId() != null;
    Meteor.subscribe('messagePublication', currentChatRoomId);
    const messages = Messages.find(
        { chatRoomId: currentChatRoomId },
        { sort: { createdAt: -1 } }
    ).fetch();
    return {
        currentChatRoomId,
        chatRooms: chatRooms,
        messages: messages.reverse(),
        loggedIn
    };
}, ChatApp);

