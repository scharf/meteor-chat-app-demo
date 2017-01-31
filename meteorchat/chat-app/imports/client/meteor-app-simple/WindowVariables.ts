
import { ChatRooms, Messages } from "../../common/mongo/ChatRooms";
import { actions } from "../../common/ChatRoomApi";
// we expose a few objects for playing in the console
(window as any).Messages = Messages;
(window as any).ChatRooms = ChatRooms;
(window as any).actions = actions;
