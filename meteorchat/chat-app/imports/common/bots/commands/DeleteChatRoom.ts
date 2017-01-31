import { addCommand, BotCommand, CommandBot } from "../CommandBot";
import { MessageBotData } from "../ChatBot";
import { ChatRooms, Messages } from "../../mongo/ChatRooms";

class CommandDeleteChatRoom implements BotCommand {
    commandName = 'delete-chat-room';
    documentation = '**deletes** the chat room!';

    handleCommand (args:string[], messageData:MessageBotData, commandBot:CommandBot):void {
        const chatRoomId = messageData.message.chatRoomId;
        Messages.remove({ chatRoomId });
        ChatRooms.remove(chatRoomId);
    }
}
addCommand(new CommandDeleteChatRoom());

