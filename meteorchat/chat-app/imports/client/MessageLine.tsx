import * as React from "react";
import { Message } from "../common/Messages";

interface MessageProperties {
    message:Message;
}

export class MessageLine extends React.Component<MessageProperties,void> {

    render() {
        return (
            <div>{this.props.message.senderName}: {this.props.message.text}</div>
        );
    }
}
