import { addCommand, BotCommand, CommandBot } from "../CommandBot";
import { MessageBotData } from "../../ChatBot";


class CommandRandom implements BotCommand {
    commandName = 'random';
    documentation = 'takes an optional argument: `number` the maximal number (starting with 1), default is 100'

    handleCommand (args:string[], messageData:MessageBotData, commandBot:CommandBot):void {
        const chatRoomId = messageData.message.chatRoomId;
        const numbers = parseFloat(args[ 0 ] || '100');
        commandBot.sendMessage(chatRoomId, 'your random number is ' + Math.floor(Math.random() * numbers + 1), false);
    }
}
addCommand(new CommandRandom());


