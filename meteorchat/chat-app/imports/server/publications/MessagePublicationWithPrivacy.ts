import { Meteor } from "meteor/meteor";
import { Messages } from "../../common/mongo/ChatRooms";

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
