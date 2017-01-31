import { Meteor } from "meteor/meteor";
import { Messages } from "./ChatRooms";
import ElizaBot = require ('elizabot');

const chatBots:{ [id:string]:ElizaBot } = {}

export function elizaCheck (chatRoomId:string, message:string) {
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
            if(eliza.quit) {
                delete chatBots[ chatRoomId ];
            }
        }
    }
    if (reply) {
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

