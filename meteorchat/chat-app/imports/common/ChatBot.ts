import { ChatRooms, Messages } from "./ChatRooms";
import { Meteor } from "meteor/meteor";

export abstract class ChatBot {
    constructor (protected id:string, protected name:string, protected avatar:string) {
    }

    abstract handleMessage (chatRoomId:string, message:string):void;

    sendMessage (chatRoomId:string, message:string, isPrivate=true) {
        Messages.insert({
            chatRoomId,
            text: message,
            ownerId:Meteor.userId(),
            senderId: this.id,
            senderName: this.name,
            avatar: this.avatar,
            isPrivate,
            createdAt: new Date(),
        });
    }
}

const chatBots:ChatBot[] = [];

export function registerChatBot (chatBot:ChatBot) {
    chatBots.push(chatBot);
}
export function botHandle (chatRoomId:string, message:string) {
    chatBots.forEach(function (chatBot:ChatBot) {
        chatBot.handleMessage(chatRoomId, message);
    })
}

