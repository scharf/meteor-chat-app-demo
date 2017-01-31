import { addCommand, BotCommand, CommandBot } from "../CommandBot";
import { MessageBotData } from "../ChatBot";
import { Messages } from "../../mongo/ChatRooms";
import { Meteor } from "meteor/meteor";

class CommandRemoveLast implements BotCommand {
    commandName = 'delete'
    documentation = 'deletes your last message!';

    handleCommand (args:string[], messageData:MessageBotData, commandBot:CommandBot):void {
        const chatRoomId = messageData.message.chatRoomId;
        const lastMessage = Messages.findOne({ ownerId: Meteor.userId(), chatRoomId }, { sort: { createdAt: -1 } });
        if (lastMessage) {
            Messages.remove(lastMessage._id);
            messageData.doNotSend = true;
        }

    }
}
addCommand(new CommandRemoveLast());

