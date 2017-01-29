import * as React from "react";
import { Message } from "../common/Messages";
import { Media, Image } from 'react-bootstrap';

interface MessageProperties {
    message:Message;
}

export class MessageLine extends React.Component<MessageProperties,void> {

    render() {
        return (
            <Media.ListItem>
                <Media.Left align="top">
                    <Image  width={40} height={40} src={this.props.message.avatar} rounded />
                </Media.Left>
                <Media.Body>
                    <Media.Heading>{this.props.message.senderName}</Media.Heading>
                    {this.props.message.text}
                </Media.Body>
            </Media.ListItem>
        );
    }
}
