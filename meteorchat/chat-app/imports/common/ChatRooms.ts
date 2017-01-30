import { Mongo } from 'meteor/mongo';
import { ChatRoom, ChatRoomActions, Message } from "./ChatRoomApi";

export const Messages = new Mongo.Collection<Message>('chat_messages');

export const ChatRooms = new Mongo.Collection<ChatRoom>('chat_rooms');

function createChatRoom(name:string) {
    ChatRooms.insert({
        name,
        newMessages:0
    })
}

export function createMessage(chatRoomId:string, message:string):Message {
    return {
        chatRoomId,
        text:message,
        senderId:'scharf',
        senderName:'Michael',
        avatar:'https://a248.e.akamai.net/secure.meetupstatic.com/photos/member/7/a/5/0/thumb_109171312.jpeg',
        createdAt:new Date(),
    };
}
import { ReactiveVar } from "meteor/reactive-var";

const reactiveChatRoomId = new ReactiveVar<string>("");

export function getCurrentChatRoomId() {
    return reactiveChatRoomId.get();
}

function gotoChatRoom(chatRoomId:string) {
    reactiveChatRoomId.set(chatRoomId);
}

export const chatRoomActions:ChatRoomActions = {
    gotoChatRoom,
    createChatRoom,
    sendMessage(chatRoomId:string, message:string):void {
        Messages.insert(createMessage(chatRoomId,message));
    }

}
