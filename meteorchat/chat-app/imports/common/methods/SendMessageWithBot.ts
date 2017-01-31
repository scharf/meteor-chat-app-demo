import { Meteor } from "meteor/meteor";
import { botSendMessage } from "../ChatBot";

Meteor.methods({
    methodSendMessage(chatRoomId:string, message:string) {
        botSendMessage(chatRoomId, message);
    }
});
