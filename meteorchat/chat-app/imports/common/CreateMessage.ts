import { Message } from "./ChatRoomApi";
import { Meteor } from "meteor/meteor";

export function createMessage (chatRoomId:string, message:string):Message {
    return {
        chatRoomId,
        text: message,
        ownerId: Meteor.userId(),
        senderId: Meteor.userId(),
        senderName: Meteor.user().username,
        avatar: getAvatar(),
        createdAt: new Date(),
    };
}

function getAvatar () {
    const user = Meteor.user();
    if (user && user.profile && user.profile.avatar) {
        return user.profile.avatar;
    }
    return '/avatar.jpg';
}
