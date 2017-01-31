import { addCommand, BotCommand, CommandBot } from "../CommandBot";
import { MessageBotData } from "../../ChatBot";
import { Messages } from "../../ChatRooms";

class CommandClear implements BotCommand {
    commandName = 'clear';

    handleCommand (args:string[], messageData:MessageBotData, commandBot:CommandBot):void {
        const chatRoomId = messageData.message.chatRoomId;
        Messages.remove({ chatRoomId });
        messageData.doNotSend = true;
    }
}
addCommand(new CommandClear());

