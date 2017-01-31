import { ChatBot, MessageBotData, registerChatBot } from "../ChatBot";
import { Messages } from "../ChatRooms";
import { Meteor } from "meteor/meteor";

class SedBot extends ChatBot {
    constructor () {
        super('sed', 'Sed Bot', '/bot.jpg');
    }
    beforeSendMessage (messageData:MessageBotData) {
        const message = messageData.message.text;
        const match = message.match(/^s\/([^/]*)\/([^/]+)\//);
        if(match) {
            const pattern = match[1]
            const replacement = match[2]
            const chatRoomId = messageData.message.chatRoomId;
            const lastMessage = Messages.findOne({senderId:Meteor.userId(), chatRoomId},{ sort: { createdAt: -1 }});
            const newText = lastMessage.text.replace(new RegExp(pattern),replacement);
            Messages.update(lastMessage._id, {$set:{text:newText}});
            messageData.doNotSend=true;
        }
    };
}

registerChatBot(new SedBot());
