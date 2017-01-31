import { registerChatBot } from "../../common/bots/ChatBot";
import { sleep } from "./Sleep";
import { Messages } from "../../common/mongo/ChatRooms";
import { SimpleElizaChatBot } from "./SimpleElizaChatBot";
import ElizaBot = require ('elizabot');

class ElizaChatBotCool extends SimpleElizaChatBot {
    sendMessage (chatRoomId:string, reply:string) {
        const id = super.sendMessage(chatRoomId, '', false);
        let text = '';
        reply.split('').forEach(char => {
            text += char;
            Messages.update(id, { $set: { text } });
            sleep(Math.random() * 30);
        })
        return id;
    }
}

registerChatBot(new ElizaChatBotCool());
