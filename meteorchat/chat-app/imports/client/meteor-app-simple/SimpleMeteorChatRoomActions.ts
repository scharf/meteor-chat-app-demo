import { setActions } from "../../common/ChatRoomApi";
import { Meteor } from "meteor/meteor";
import { ChatRooms, Messages } from "../../common/mongo/ChatRooms";
import { gotoChatRoom } from "./SimpleReactiveChatRoomId";


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
});

