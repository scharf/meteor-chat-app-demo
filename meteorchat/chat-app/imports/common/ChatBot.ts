import { Messages } from "./ChatRooms";
import { elizaCheck } from "./ElizaBot";

export function botHandle (chatRoomId:string, message:string) {
    if (message.match(/^\/clear/)) {
        Messages.remove({ chatRoomId });
        return;
    }
    elizaCheck(chatRoomId, message);
}

