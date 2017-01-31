import { setActions } from "../common/ChatRoomApi";
import { ReactiveVar } from "meteor/reactive-var";
import { Meteor } from "meteor/meteor";

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

setActions({
    gotoChatRoom,
    createChatRoom,
    sendMessage,
    setAvatar
})
