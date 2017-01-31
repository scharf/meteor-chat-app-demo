import { ChatBot, MessageBotData, registerChatBot } from "../common/ChatBot";
import ElizaBot = require ('elizabot');
import { sleep } from "./Sleep";

const chatBots:{ [id:string]:ElizaBot } = {}

class ElizaChatBot extends ChatBot {
    constructor () {
        super('eliza', 'Dr. Sigmund Freud', '/freud.jpg');
    }

    afterSendMessage (messageData:MessageBotData) {
        // do not act on private messages
        if (messageData.message.isPrivate) {
            return;
        }
        const chatRoomId = messageData.message.chatRoomId;
        const message = messageData.message.text;
        let reply = '';
        let elizaElizaBot = null;
        if (message.match(/^\help/i)) {
            elizaElizaBot = new ElizaBot();
            reply = elizaElizaBot.getInitial();
            chatBots[ chatRoomId ] = elizaElizaBot;
        } else {
            const eliza = chatBots[ chatRoomId ];
            if (eliza) {
                reply = eliza.transform(message);
                if (eliza.quit) {
                    delete chatBots[ chatRoomId ];
                }
            }
        }
        if (reply) {
            sleep(500 + Math.random() * 1000);
            this.sendMessage(chatRoomId, reply, false);
        }
    }
}

registerChatBot(new ElizaChatBot());
