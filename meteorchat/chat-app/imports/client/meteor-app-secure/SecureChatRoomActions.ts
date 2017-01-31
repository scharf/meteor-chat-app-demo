import { setActions } from "../../common/ChatRoomApi";
import { Meteor } from "meteor/meteor";
import { gotoChatRoom } from "../meteor-app/ReactiveChatRoomId";

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
