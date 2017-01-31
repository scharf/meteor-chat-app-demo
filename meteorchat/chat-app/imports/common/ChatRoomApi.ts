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
    newMessages:number;
}

/**
 * T
 */
interface ChatRoomActions {
    /**
     * Change the current chat room ID
     * @param chatRoomId
     */
    gotoChatRoom(chatRoomId:string):void;
    /**
     * Creates a new chat room
     * @param name
     */
    createChatRoom(name:string):void;
    /**
     * Sends a message to the chat room on behalf of the current user
     * @param chatRoomId
     * @param message
     */
    sendMessage(chatRoomId:string, message:string):void;
    /**
     * Change the avatar image of the current user
     * @param url to a avatar image (jpg)
     */
    setAvatar(url:string):void;
}

/**
 * Actions our application can handle. Different implementations mey be installed
 */
export let actions:ChatRoomActions;

/**
 * Registers an action implementation -- can only be done once!
 * @param actionsImpl
 */
export function setActions (actionsImpl:ChatRoomActions) {
    if(actions) {
        console.error('actions have been registered before');
    }
    actions = actionsImpl;
}
