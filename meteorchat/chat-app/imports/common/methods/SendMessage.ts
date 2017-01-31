import { Meteor } from "meteor/meteor";
import { createMessage, Messages } from "../ChatRooms";

Meteor.methods({
    methodSendMessage(chatRoomId:string, message:string) {
        Messages.insert(createMessage(chatRoomId, message));
    }
});
