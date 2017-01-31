import { SimpleSchema } from "meteor/aldeed:simple-schema";
import { ChatRooms, Messages } from "./ChatRooms";

const MessageSchema = new SimpleSchema({
    text: {
        type: String
    },
    chatRoomId: {
        type: String
    },
    ownerId: {
        type: String
    },
    senderName: {
        type: String
    },
    avatar: {
        type: String,
        defaultValue:'/avatar.jpg'
    },
    isPrivate: {
        type: Boolean,
        defaultValue: false
    },
    createdAt: {
        type: Date,
        defaultValue: false
    }
});

Messages.attachSchema(MessageSchema);


const ChatRoomSchema = new SimpleSchema({
    name: {
        type: String
    },
    newMessages: {
        type: Number,
        defaultValue: 0,
        min: 0
    }
});

ChatRooms.attachSchema(ChatRoomSchema);
