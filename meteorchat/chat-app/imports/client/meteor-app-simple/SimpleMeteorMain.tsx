import * as React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { SimpleMeteorApp } from "./SimpleMeteorApp";
import './SimpleMeteorChatRoomActions';

Meteor.startup(() => {
    render(<SimpleMeteorApp />, document.getElementById('render-target'));
});
