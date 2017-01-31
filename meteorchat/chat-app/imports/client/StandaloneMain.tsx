import * as React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { StandaloneApp } from "./StandaloneApp";

Meteor.startup(() => {
    render(<StandaloneApp />, document.getElementById('render-target'));
});
