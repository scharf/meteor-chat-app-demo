import { Meteor } from "meteor/meteor";
import { Messages } from "../../common/ChatRooms";

Meteor.publish('messagePublication', function (chatRoomId:string) {
    return Messages.find(
        { chatRoomId: chatRoomId },
        { sort: { createdAt: -1 } })
})
