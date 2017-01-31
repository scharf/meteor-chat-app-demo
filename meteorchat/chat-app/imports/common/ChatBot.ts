import { Messages } from "./ChatRooms";

export interface ChatBot {
    handleMessage(chatRoomId:string, message:string):void;
}
const chatBots:ChatBot[]=[];

export function registerChatBot(chatBot:ChatBot) {
    chatBots.push(chatBot);
}

export function botHandle (chatRoomId:string, message:string) {
    if (message.match(/^\/clear/)) {
        Messages.remove({ chatRoomId });
        return;
    }
    chatBots.forEach(function(chatBot:ChatBot) {
        chatBot.handleMessage(chatRoomId, message);
    })
}

