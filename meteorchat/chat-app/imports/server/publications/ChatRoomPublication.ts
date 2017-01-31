import { Meteor } from "meteor/meteor";
import { ChatRooms } from "../../common/mongo/ChatRooms";

Meteor.publish('chatRoomPublication', function () {
    return ChatRooms.find()
})
