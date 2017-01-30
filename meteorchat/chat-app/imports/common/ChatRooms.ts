import { Mongo } from "meteor/mongo";
import { ChatRoom, Message, setActions } from "./ChatRoomApi";
import { ReactiveVar } from "meteor/reactive-var";
import { Meteor } from "meteor/meteor";

export const Messages = new Mongo.Collection<Message>('chat_messages');

export const ChatRooms = new Mongo.Collection<ChatRoom>('chat_rooms');

export function createMessage (chatRoomId:string, message:string):Message {
    return {
        chatRoomId,
        text: message,
        senderId: Meteor.userId(),
        senderName: Meteor.user().username,
        avatar: getAvatar(),
        createdAt: new Date(),
    };
}

Meteor.methods({
    methodSetAvatar(url:string) {
        Meteor.users.update(
            Meteor.userId(),
            { $set: { "profile.avatar": url } }
        );
        // change the avatar of all my messages
        Messages.update(
            { senderId: Meteor.userId() },
            { $set: { "avatar": url } },
            { multi: true }
        );
    },
    methodCreateChatRoom(name:string) {
        ChatRooms.insert({
            name,
            newMessages: 0
        })
    },
    methodSendMessage(chatRoomId:string, message:string) {
        Messages.insert(createMessage(chatRoomId, message));
    }

});

const reactiveChatRoomId = new ReactiveVar<string>("");

export function getCurrentChatRoomId () {
    return reactiveChatRoomId.get();
}

function gotoChatRoom (chatRoomId:string) {
    reactiveChatRoomId.set(chatRoomId);
}

function createChatRoom (name:string) {
    Meteor.call('methodCreateChatRoom', name);
}

function sendMessage (chatRoomId:string, message:string):void {
    Meteor.call('methodSendMessage', chatRoomId, message);
}

export function setAvatar (url:string) {
    Meteor.call('methodSetAvatar', url);
}

function getAvatar () {
    const user = Meteor.user();
    if (user && user.profile && user.profile.avatar) {
        return user.profile.avatar;
    }
    return '/avatar.jpg';
}

setActions({
    gotoChatRoom,
    createChatRoom,
    sendMessage,
    setAvatar
})
