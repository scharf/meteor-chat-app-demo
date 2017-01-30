import { Mongo } from 'meteor/mongo';
import { actions, ChatRoom, Message, setActions } from "./ChatRoomApi";
import { ReactiveVar } from "meteor/reactive-var";
import { Meteor } from "meteor/meteor";

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
        senderId:Meteor.userId(),
        senderName:Meteor.user().username,
        avatar:'https://a248.e.akamai.net/secure.meetupstatic.com/photos/member/7/a/5/0/thumb_109171312.jpeg',
        createdAt:new Date(),
    };
}

const reactiveChatRoomId = new ReactiveVar<string>("");

export function getCurrentChatRoomId() {
    return reactiveChatRoomId.get();
}

function gotoChatRoom(chatRoomId:string) {
    reactiveChatRoomId.set(chatRoomId);
}
function sendMessage(chatRoomId:string, message:string):void {
    Messages.insert(createMessage(chatRoomId,message));
}

setActions( {
    gotoChatRoom,
    createChatRoom,
    sendMessage
})
