export interface ChatRoomActions {
    gotoChatRoom(chatRoomId:string):void;
    createChatRoom(name:string):void;
    sendMessage(chatRoomId:string, message:string):void;
}
