import * as React from "react";
import { Meteor } from "meteor/meteor";
import { render } from 'react-dom';
import { MeteorApp } from "./MeteorApp";

Meteor.startup(() => {
    render(<MeteorApp />, document.getElementById('render-target'));
});
