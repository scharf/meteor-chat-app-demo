export interface Message {
    _id?:string;
    text:string;
    chatRoomId:string;
    ownerId:string;
    senderId:string;
    senderName:string;
    avatar:string;
    isPrivate?:boolean;
    createdAt:Date;
}


export interface ChatRoom {
    _id?:string;
    name:string;
    isSubscribed?:boolean;
    newMessages:number;
}


interface ChatRoomActions {
    gotoChatRoom(chatRoomId:string):void;
    createChatRoom(name:string):void;
    sendMessage(chatRoomId:string, message:string):void;
    setAvatar(url:string):void;
}


export let actions:ChatRoomActions;
export function setActions (actionsImpl:ChatRoomActions) {
    actions = actionsImpl;
}
