import { Mongo } from 'meteor/mongo';
import { ChatRoomActions, Message } from "./ChatRoomApi";

export const Messages = new Mongo.Collection<Message>('chat_messages');

export function createMessage(chatRoomId:string, message:string):Message {
    return {
        chatRoomId,
        text:message,
        senderId:'scharf',
        senderName:'Michael',
        avatar:'https://a248.e.akamai.net/secure.meetupstatic.com/photos/member/7/a/5/0/thumb_109171312.jpeg',
        createdAt:new Date(),
    } as Message;
}

export const chatRoomActions:ChatRoomActions = {
    gotoChatRoom(chatRoomId:string):void {

    },
    createChatRoom(name:string):void {

    },
    sendMessage(chatRoomId:string, message:string):void {
        Messages.insert(createMessage(chatRoomId,message));
    }

}
