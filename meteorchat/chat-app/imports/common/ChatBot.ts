import { Messages } from "./ChatRooms";

export function botHandle (chatRoomId:string, message:string) {
    if (message.match(/^\/clear/)) {
        Messages.remove({ chatRoomId });
        return;
    }
}

