import { ChatBot, MessageBotData, registerChatBot } from "../ChatBot";

export interface BotCommand {
    commandName:string;
    documentation?:string;
    handleCommand(args:string[], messageData:MessageBotData, commandBot:CommandBot):void;
}
const commands:{ [command:string]:BotCommand } = {};

export function addCommand (command:BotCommand) {
    commands[ command.commandName ] = command;
}

export class CommandBot extends ChatBot {
    constructor () {
        super('helpbot', 'Command Bot', '/bot.jpg');
    }

    afterSendMessage (messageData:MessageBotData) {
        const messageText = messageData.message.text;
        if (messageText.match(/^\//)) {
            const command = messageText.replace(/^\/([-_\w]+).*/, '$1');
            const args = messageText.replace(/^\/[-_\w]+\s*/, '').split(/\s+/);
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
        let command = commands[ commandName ];
        if (!command) {
            command = commands[ 'help' ];
        }
        if (command) {
            command.handleCommand(args, messageData, this);
        }
    }
}

registerChatBot(new CommandBot());

class CommandHelp implements BotCommand {
    commandName = 'help'

    handleCommand (args:string[], messageData:MessageBotData, commandBot:CommandBot):void {
        const chatRoomId = messageData.message.chatRoomId;
        let help:string[] = [];
        Object.keys(commands).sort().forEach(commandName => {
            const command = commands[ commandName ];
            let helpString = '/`' + commandName + '`';
            if (command.documentation) {
                helpString += ' ' + command.documentation
            }
            help.push(helpString);
        });
        commandBot.sendMessage(chatRoomId, 'Those are the commands I understand:\n' + help.join('\n'));
        messageData.message.isPrivate = true;
    }
}
addCommand(new CommandHelp());

