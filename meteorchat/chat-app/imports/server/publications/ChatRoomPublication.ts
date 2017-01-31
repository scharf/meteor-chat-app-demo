import { Meteor } from "meteor/meteor";
import { ChatRooms } from "../../common/ChatRooms";

Meteor.publish('chatRoomPublication', function () {
    return ChatRooms.find()
})
