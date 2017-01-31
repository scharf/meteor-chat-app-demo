import { setActions } from "../../common/ChatRoomApi";
import { ReactiveVar } from "meteor/reactive-var";
import { Meteor } from "meteor/meteor";
import { ChatRooms, Messages } from "../../common/mongo/ChatRooms";

const reactiveChatRoomId = new ReactiveVar<string>("");

export function getCurrentChatRoomId () {
    return reactiveChatRoomId.get();
}

function gotoChatRoom (chatRoomId:string) {
    reactiveChatRoomId.set(chatRoomId);
}

function createChatRoom (name:string) {
    ChatRooms.insert({
        name,
        newMessages: 0
    })
}

function sendMessage (chatRoomId:string, message:string):void {
    Messages.insert({
        chatRoomId,
        text: message,
        ownerId: 'user',
        senderId: 'user',
        senderName: 'Test User',
        avatar: '/avatar.jpg',
        createdAt: new Date(),
    });
}

export function setAvatar (url:string) {
    Meteor.users.update(
        Meteor.userId(),
        { $set: { "profile.avatar": url } }
    );
    // change the avatar of all my messages
    Messages.update(
        { ownerId: Meteor.userId() },
        { $set: { "avatar": url } },
        { multi: true }
    );
}

setActions({
    gotoChatRoom,
    createChatRoom,
    sendMessage,
    setAvatar
})
