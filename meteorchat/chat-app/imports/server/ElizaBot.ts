import { ChatBot, MessageBotData, registerChatBot } from "../common/ChatBot";
import ElizaBot = require ('elizabot');
import { sleep } from "./Sleep";
import { Messages } from "../common/ChatRooms";

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
            const id = this.sendMessage(chatRoomId, '', false);
            let text = '';
            reply.split('').forEach(char=>{
                text+=char;
                Messages.update(id,{$set:{text}});
                sleep(Math.random() * 70);
            })
        }
    }
}

registerChatBot(new ElizaChatBot());
