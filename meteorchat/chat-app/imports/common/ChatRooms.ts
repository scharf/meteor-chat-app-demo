import { createMessage, createMessages, Message } from "./Messages";
import { ChatRoomActions } from "./ChatRoomActions";
export interface ChatRoom {
    _id:string;
    name:string;
    isSubscribed?:boolean;
    newMessages:number;
    messages:Message[];
}
let changeListeners:Function[] = [];

export function registerChangeListener(cb:Function) {
    changeListeners.push(cb);
    return function ungregister() {
        changeListeners = changeListeners.filter(listener=>listener!==cb)
    }
}
export function fireChanges() {
    changeListeners.slice().forEach(cb => cb());
}

let nextId=1;
const chatRooms:ChatRoom[]=[];
createChatRooms();

function createChatRoom(name:string):ChatRoom {
    const chatRoom:ChatRoom={
        _id:`${nextId++}`,
        name,
        messages:[],
        newMessages:0
    }
    chatRooms.push(chatRoom)
    fireChanges();
    return chatRoom;
}



function createChatRooms(n=5) {
    for (let i = 0; i < n; i++) {
        const chatRoom = createChatRoom(`Chat ${i}`);
        chatRoom.messages=createMessages(5*(i+1));
        chatRoom.newMessages=chatRoom.messages.length;
    }
}

function getChatRoom(chatRoomId:string):ChatRoom {
    for (let i = 0; i < chatRooms.length; i++) {
        const chatRoom = chatRooms[i];
        if(chatRoom._id === chatRoomId) {
            return chatRoom;
        }
    }

}

function sendMessage(chatRoomId:string, message:string) {
    const chatRoom = getChatRoom(chatRoomId);
    chatRoom.messages.push(createMessage(message));
    // chatRoom.newMessages+=1;
    fireChanges();
}

export function chatRoomSubscribe(chatRoomId:string, subscribe:boolean) {
    getChatRoom(chatRoomId).isSubscribed = subscribe;
    fireChanges();
}

let currentChatRoom:ChatRoom;
function gotoChatRoom(chatRoomId:string) {
    currentChatRoom = getChatRoom(chatRoomId);
    currentChatRoom.newMessages = 0;
    fireChanges();
}
gotoChatRoom(chatRooms[0]._id);

export function chatRoomGetCurrent() {
    return currentChatRoom;
}

export function chatRoomGetAll() {
    return chatRooms;
}

export const chatRoomActionsActions:ChatRoomActions = {
    gotoChatRoom,
    createChatRoom,
    sendMessage,
}
