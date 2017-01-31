import * as React from "react";
import * as ReactDOM from "react-dom";
import { Template } from "meteor/templating";
import { Blaze } from "meteor/blaze";
import { Accounts } from "meteor/accounts-base";

Accounts.ui.config({
    //  'USERNAME_AND_EMAIL', 'USERNAME_AND_OPTIONAL_EMAIL',
    //  'USERNAME_ONLY', or 'EMAIL_ONLY'
    passwordSignupFields: 'USERNAME_ONLY',
});

export default class AccountsUIWrapper extends React.Component<void,void> {
    private view:any

    componentDidMount () {
        // Use Meteor Blaze to render login buttons
        this.view = Blaze.render((Template as any).loginButtons,
            ReactDOM.findDOMNode(this.refs[ 'container' ]));
    }

    componentWillUnmount () {
        // Clean up Blaze view
        Blaze.remove(this.view);
    }

    render () {
        // Just render a placeholder container that will be filled in
        return <span ref="container"/>;
    }
}
