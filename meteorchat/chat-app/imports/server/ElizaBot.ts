import { ChatBot, MessageBotData, registerChatBot } from "../common/ChatBot";
import { sleep } from "./Sleep";
import { Messages } from "../common/ChatRooms";
import ElizaBot = require ('elizabot');

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
        if (message.match(/^doctor/i)) {
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
            const id = this.sendMessage(chatRoomId, '', false);
            let text = '';
            reply.split('').forEach(char => {
                text += char;
                Messages.update(id, { $set: { text } });
                sleep(Math.random() * 100);
            })
        }
    }
}

registerChatBot(new ElizaChatBot());
