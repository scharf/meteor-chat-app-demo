import { Meteor } from "meteor/meteor";
import { ChatRooms, createMessage, Messages } from "./ChatRooms";
import { botHandle } from "./ChatBot";

Meteor.methods({
    methodSetAvatar(url:string) {
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
    },
    methodCreateChatRoom(name:string) {
        ChatRooms.insert({
            name,
            newMessages: 0
        })
    },
    methodSendMessage(chatRoomId:string, message:string) {
        Messages.insert(createMessage(chatRoomId, message));
        botHandle(chatRoomId, message);
    }

});
