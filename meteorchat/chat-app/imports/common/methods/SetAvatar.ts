import { Meteor } from "meteor/meteor";
import { Messages } from "../mongo/ChatRooms";

Meteor.methods({
    methodSetAvatar(url:string) {
        Meteor.users.update(
            Meteor.userId(),
            { $set: { "profile.avatar": url } }
        );
        // change the avatar of all my messages
        Messages.update(
            { ownerId: Meteor.userId() },
            { $set: { "avatar": url } },
            { multi: true }
        );
    },
});
