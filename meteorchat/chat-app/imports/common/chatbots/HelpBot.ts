import { ChatBot, registerChatBot } from "../ChatBot";
import { ChatRooms, Messages } from "../ChatRooms";
import { Meteor } from "meteor/meteor";

class HelptBot extends ChatBot {
    constructor() {
        super('helpbot', 'Help Bot', '/bot.jpg');
    }
    handleMessage (chatRoomId:string, message:string) {
        if (message.match(/^\/clear/)) {
            Messages.remove({ chatRoomId });
            return;
        }
        if (message.match(/^\/delete/)) {
            Messages.remove({ chatRoomId });
            ChatRooms.remove(chatRoomId);
            return;
        }
        if (message.match(/^\/users/)) {
            this.sendMessage(chatRoomId, Meteor.users.find({}, { fields: { username: 1 } }).fetch().map(u => u.username).join('\n'));
            return;
        }
        if (message.match(/^\/help/)) {
            this.sendMessage(chatRoomId, 'You can use the following commands: \n`/clear`\n`/delete`\n`/users`');
            return;
        }
    }
}

registerChatBot(new HelptBot());
