import { Meteor } from "meteor/meteor";
import { Messages } from "./ChatRooms";


Meteor.startup(function () {
    // User indices
    Meteor.users._ensureIndex('username', { unique: 1 });

    Messages._ensureIndex('createtAt');
    Messages._ensureIndex('chatRoomId');
    Messages._ensureIndex('isPrivate');
});
