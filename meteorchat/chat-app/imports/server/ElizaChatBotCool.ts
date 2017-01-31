import { registerChatBot } from "../common/ChatBot";
import { sleep } from "./Sleep";
import { Messages } from "../common/ChatRooms";
import { ElizaChatBot } from "./ElizaChatBot";
import ElizaBot = require ('elizabot');

class ElizaChatBotCool extends ElizaChatBot {
    sendMessage (chatRoomId:string, reply:string) {
        const id = super.sendMessage(chatRoomId, '', false);
        let text = '';
        reply.split('').forEach(char => {
            text += char;
            Messages.update(id, { $set: { text } });
            sleep(Math.random() * 100);
        })
        return id;
    }
}

registerChatBot(new ElizaChatBotCool());
