import { Meteor } from "meteor/meteor";
import { Messages } from "../common/ChatRooms";
import { ChatBot, registerChatBot } from "../common/ChatBot";
import ElizaBot = require ('elizabot');
import Future = require('fibers/future');

const chatBots:{ [id:string]:ElizaBot } = {}

function sleep (millisec:number) {
    const future = new Future<String>();
    setTimeout(() => future.return(null), millisec);
    future.wait();
}

class ElizaChatBot implements ChatBot {
    handleMessage (chatRoomId:string, message:string) {
        if (Meteor.isClient) {
            return;
        }
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
            Messages.insert({
                chatRoomId,
                text: reply,
                senderId: 'Eliza',
                senderName: 'Dr. Sigmund Freud',
                avatar: '/freud.jpg',
                createdAt: new Date(),
            });
        }

    }

}

registerChatBot(new ElizaChatBot());
