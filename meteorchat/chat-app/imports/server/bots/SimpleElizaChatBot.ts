import { ChatBot, MessageBotData } from "../../common/bots/ChatBot";
import ElizaBot = require ('elizabot');

const chatBots:{ [id:string]:ElizaBot } = {}

export class SimpleElizaChatBot extends ChatBot {
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
            this.sendMessage(chatRoomId, reply);
        }

    }
}
