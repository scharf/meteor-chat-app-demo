import { createMessage, createMessages, Message } from "./Messages";
export interface ChatRoom {
    _id:string;
    name:string;
    messages:Message[];
}

let nextId=1;
export const chatRooms:ChatRoom[]=[];
createChatRooms();

export function addChatRoom(name:string):ChatRoom {
    const chatRoom:ChatRoom={
        _id:`${nextId++}`,
        name,
        messages:[]
    }
    chatRooms.push(chatRoom)
    return chatRoom;
}



function createChatRooms(n=5) {
    for (let i = 0; i < n; i++) {
        const chatRoom = addChatRoom(`Chat ${i}`);
        chatRoom.messages=createMessages(5*(i+1));
    }
}

export function getChatRoom(chatRoomId:string):ChatRoom {
    for (let i = 0; i < chatRooms.length; i++) {
        const chatRoom = chatRooms[i];
        if(chatRoom._id === chatRoomId) {
            return chatRoom;
        }
    }

}
let currentChatRoom = chatRooms[0]._id;
export function setCurrentChatRoom(chatRoomId:string) {
    currentChatRoom = chatRoomId;
}
export function getCurrentChatRoom() {
    return currentChatRoom;
}

export function sendMessage(chatRoomId:string, message:string) {
    getChatRoom(chatRoomId).messages.push(createMessage(message));
}

