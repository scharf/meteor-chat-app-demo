import { ChatBot, MessageBotData, registerChatBot } from "../ChatBot";
import { ChatRooms, Messages } from "../ChatRooms";
import { Meteor } from "meteor/meteor";

export interface BotCommand {
    commandName:string;
    documentation?:string;
    handleCommand(args:string[], messageData:MessageBotData, commandBot:CommandBot):void;
}
const commands:{ [command:string]:BotCommand } = {};

export function addCommand (command:BotCommand) {
    commands[ command.commandName ] = command;
}

class CommandBot extends ChatBot {
    constructor () {
        super('helpbot', 'Help Bot', '/bot.jpg');
    }

    beforeSendMessage (messageData:MessageBotData) {
        const messageText = messageData.message.text;
        if (messageText.match(/^\//)) {
            const command = messageText.replace(/^\/([-_\w]+).*/, '$1');
            const args = messageText.replace(/(^(\/[-_\w]+)\w*).*/, '').split(/\w+/);
            this.handleCommand(command, args, messageData)

        }
    }

    /**
     *
     * @param commandName
     * @param args
     * @param messageData
     * @returns {boolean} true if the command was handeled
     */
    private handleCommand (commandName:string, args:string[], messageData:MessageBotData) {
        const command = commands[commandName];
        if(command) {
            command.handleCommand(args,messageData,this);
        }
    }
}
class CommandClear implements BotCommand {
    commandName='clear';

    handleCommand (args:string[], messageData:MessageBotData, commandBot:CommandBot):void {
        const chatRoomId = messageData.message.chatRoomId;
        Messages.remove({ chatRoomId });
        messageData.doNotSend = true;
    }
}
addCommand(new CommandClear());

class CommandDeleteChatRoom implements BotCommand {
    commandName='delete';
    documentation='**deletes** the chat room!';
    handleCommand (args:string[], messageData:MessageBotData, commandBot:CommandBot):void {
        const chatRoomId = messageData.message.chatRoomId;
        Messages.remove({ chatRoomId });
        ChatRooms.remove(chatRoomId);
    }
}
addCommand(new CommandDeleteChatRoom());


class CommandListUsers implements BotCommand {
    commandName='users'

    handleCommand (args:string[], messageData:MessageBotData, commandBot:CommandBot):void {
        const chatRoomId = messageData.message.chatRoomId;
        commandBot.sendMessage(chatRoomId, Meteor.users.find({}, { fields: { username: 1 } }).fetch().map(u => u.username).join('\n'));
        messageData.message.isPrivate = true;
    }
}
addCommand(new CommandListUsers());

class CommandHelp implements BotCommand {
    commandName='help'

    handleCommand (args:string[], messageData:MessageBotData, commandBot:CommandBot):void {
        const chatRoomId = messageData.message.chatRoomId;
        let help:string[]=[];
        Object.keys(commands).sort().forEach(commandName => {
            const command = commands[commandName];
            let helpString='/`' + commandName+'`';
            if(command.documentation) {
                helpString+=' ' +command.documentation
            }
            help.push(helpString);
        });
        commandBot.sendMessage(chatRoomId, help.join('\n'));
        messageData.message.isPrivate = true;
    }
}
addCommand(new CommandHelp());

class CommandRandom implements BotCommand {
    commandName='random'

    handleCommand (args:string[], messageData:MessageBotData, commandBot:CommandBot):void {
        const chatRoomId = messageData.message.chatRoomId;
        commandBot.sendMessage(chatRoomId, 'your random number is '+Math.floor(Math.random()*1000), false);
    }
}
addCommand(new CommandRandom());


registerChatBot(new CommandBot());
