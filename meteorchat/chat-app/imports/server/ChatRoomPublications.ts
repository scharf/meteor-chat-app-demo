import { Meteor } from "meteor/meteor";
import { ChatRooms, Messages } from "../common/ChatRooms";

Meteor.publish('messagePublication', function (chatRoomId:string) {
    return Messages.find(
        {
            chatRoomId: chatRoomId,
            $or: [
                { ownerId: this.userId },
                { isPrivate: { $ne: true } }
            ]
        },
        { sort: { createdAt: -1 } })
})

Meteor.publish('chatRoomPublication', function () {
    return ChatRooms.find()
})
