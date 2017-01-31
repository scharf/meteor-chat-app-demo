import { Mongo } from "meteor/mongo";
import { ChatRoom, Message } from "./ChatRoomApi";

export const Messages = new Mongo.Collection<Message>('chat_messages');

export const ChatRooms = new Mongo.Collection<ChatRoom>('chat_rooms');

