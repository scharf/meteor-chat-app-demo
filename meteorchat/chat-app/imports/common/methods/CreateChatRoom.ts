import { Meteor } from "meteor/meteor";
import { ChatRooms } from "../mongo/ChatRooms";

Meteor.methods({
    methodCreateChatRoom(name:string) {
        ChatRooms.insert({
            name,
            newMessages: 0
        })
    }
});
