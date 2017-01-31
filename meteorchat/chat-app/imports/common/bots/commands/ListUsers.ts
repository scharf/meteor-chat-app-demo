import { addCommand, BotCommand, CommandBot } from "../CommandBot";
import { MessageBotData } from "../ChatBot";
import { Meteor } from "meteor/meteor";

class CommandListUsers implements BotCommand {
    commandName = 'users'

    handleCommand (args:string[], messageData:MessageBotData, commandBot:CommandBot):void {
        const chatRoomId = messageData.message.chatRoomId;
        commandBot.sendMessage(chatRoomId, Meteor.users.find({}, { fields: { username: 1 } }).fetch().map(u => u.username).join('\n'));
        messageData.message.isPrivate = true;
    }
}
addCommand(new CommandListUsers());
