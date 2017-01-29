
export interface Message {
    _id:string;
    text:string;
    chatRoomId:string;
    senderId:string;
    senderName:string;
    avatar:string;
    createdAt: Date;
}


export interface ChatRoom {
    _id:string;
    name:string;
    isSubscribed?:boolean;
    newMessages:number;
}


export interface ChatRoomActions {
    gotoChatRoom(chatRoomId:string):void;
    createChatRoom(name:string):void;
    sendMessage(chatRoomId:string, message:string):void;
}
