import { Meteor } from "meteor/meteor";
import { Messages } from "../mongo/ChatRooms";
import { createMessage } from "../mongo/CreateMessage";

Meteor.methods({
    methodSendMessage(chatRoomId:string, message:string) {
        Messages.insert(createMessage(chatRoomId, message));
    }
});
