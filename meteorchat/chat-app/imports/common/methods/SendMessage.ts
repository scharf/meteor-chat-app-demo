import { Meteor } from "meteor/meteor";
import { Messages } from "../ChatRooms";
import { createMessage } from "../CreateMessage";

Meteor.methods({
    methodSendMessage(chatRoomId:string, message:string) {
        Messages.insert(createMessage(chatRoomId, message));
    }
});
