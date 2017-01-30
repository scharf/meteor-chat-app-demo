import { Meteor } from "meteor/meteor";
import { ChatRooms, Messages } from "../common/ChatRooms";

Meteor.publish('messagePublication', function (chatRoomId:string) {
    return Messages.find(
        { chatRoomId: chatRoomId },
        { sort: { createdAt: -1 } })
})

Meteor.publish('chatRoomPublication', function () {
    return ChatRooms.find()
})
