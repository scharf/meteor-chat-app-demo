import { Meteor } from "meteor/meteor";
import { ChatRooms } from "../ChatRooms";

Meteor.methods({
    methodCreateChatRoom(name:string) {
        ChatRooms.insert({
            name,
            newMessages: 0
        })
    }
});
