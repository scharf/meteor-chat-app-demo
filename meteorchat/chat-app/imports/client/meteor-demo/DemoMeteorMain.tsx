import * as React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { DemoMeteorApp } from "./DemoMeteorApp";

Meteor.startup(() => {
    render(<DemoMeteorApp />, document.getElementById('render-target'));
});
