import * as React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { SimpleMeteorApp } from "../meteor-app-simple/SimpleMeteorApp";

import './SecureChatRoomActions';

Meteor.startup(() => {
    render(<SimpleMeteorApp />, document.getElementById('render-target'));
});
