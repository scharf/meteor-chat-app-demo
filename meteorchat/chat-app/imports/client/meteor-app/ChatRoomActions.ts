import { setActions } from "../../common/ChatRoomApi";
import { Meteor } from "meteor/meteor";
import { gotoChatRoom } from "./ReactiveChatRoomId";

setActions({
    gotoChatRoom,
    createChatRoom (name:string) {
        Meteor.call('methodCreateChatRoom', name);
    },
    sendMessage (chatRoomId:string, message:string):void {
        Meteor.call('methodSendMessage', chatRoomId, message);
    },
    setAvatar (url:string) {
        Meteor.call('methodSetAvatar', url);
    }
})
