import { ChatBot, MessageBotData, registerChatBot } from "../ChatBot";
import { ChatRooms, Messages } from "../ChatRooms";
import { Meteor } from "meteor/meteor";

class CommandBot extends ChatBot {
    constructor () {
        super('helpbot', 'Help Bot', '/bot.jpg');
    }

    beforeSendMessage (messageData:MessageBotData) {
        const messageText = messageData.message.text;
        if (messageText.match(/^\//)) {
            const command = messageText.replace(/^\/([-_\w]+).*/, '$1');
            const args = messageText.replace(/(^(\/[-_\w]+)\w*).*/, '').split(/\w+/);
            if (this.handleCommand(command, args, messageData)) {
                messageData.message.isPrivate = true;
            }
        }
    }

    private handleCommand (command:string, args:string[], messageData:MessageBotData):boolean {
        const chatRoomId = messageData.message.chatRoomId;
        let handled = true;
        if (command === 'clear') {
            Messages.remove({ chatRoomId });
            messageData.doNotSend = true;
        } else if (command === 'delete') {
            Messages.remove({ chatRoomId });
            ChatRooms.remove(chatRoomId);
        } else if (command === 'users') {
            this.sendMessage(chatRoomId, Meteor.users.find({}, { fields: { username: 1 } }).fetch().map(u => u.username).join('\n'));
        } else if (command === 'help') {
            this.sendMessage(chatRoomId, 'You can use the following commands: \n`/clear`\n`/delete`\n`/users`');
        } else {
            handled = false;
        }
        return handled;
    }
}

registerChatBot(new CommandBot());

