import { createMessage, Messages } from "./ChatRooms";
import { Meteor } from "meteor/meteor";
import { Message } from "./ChatRoomApi";

export interface MessageBotData {
    message:Message;
    doNotSend:boolean;
}

export abstract class ChatBot {
    constructor (protected id:string, protected name:string, protected avatar:string) {
    }

    beforeSendMessage (messageData:MessageBotData) {

    };

    afterSendMessage (messageData:MessageBotData) {

    };

    sendMessage (chatRoomId:string, message:string, isPrivate = true) {
        Messages.insert({
            chatRoomId,
            text: message,
            ownerId: Meteor.userId(),
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

export function botSendMessage (chatRoomId:string, messageText:string) {
    const messageBotData:MessageBotData = {
        message: createMessage(chatRoomId, messageText),
        doNotSend: false,
    };
    chatBots.forEach(function (chatBot:ChatBot) {
        chatBot.beforeSendMessage(messageBotData);
    });
    if (messageBotData.doNotSend) {
        return;
    }
    const messageId = Messages.insert(messageBotData.message);
    messageBotData.message = Messages.findOne(messageId);
    chatBots.forEach(function (chatBot:ChatBot) {
        chatBot.afterSendMessage(messageBotData);
    });

}
