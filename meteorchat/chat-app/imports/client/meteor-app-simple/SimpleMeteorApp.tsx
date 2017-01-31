import * as React from "react";
import { createContainer } from "meteor/react-meteor-data";
import { ChatRooms, Messages } from "../../common/mongo/ChatRooms";
import { ChatApp, ChatAppProps } from "../components/ChatApp";
import { getCurrentChatRoomId } from "./SimpleReactiveChatRoomId";

export const SimpleMeteorApp = createContainer<void>(function ():ChatAppProps {
    const chatRooms = ChatRooms.find().fetch();

    let currentChatRoomId = getCurrentChatRoomId();

    const messages = Messages.find(
        { chatRoomId: currentChatRoomId },
        { sort: { createdAt: 1 } }
    ).fetch();
    return {
        currentChatRoomId,
        chatRooms: chatRooms,
        messages: messages,
        loggedIn: true
    };
}, ChatApp);

// we expose a few objects for playing in the console
(window as any).Messages = Messages;
(window as any).ChatRooms = ChatRooms;
