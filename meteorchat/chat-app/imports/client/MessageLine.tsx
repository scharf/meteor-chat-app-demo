import * as React from "react";
import { Media, Image } from 'react-bootstrap';
import { Message } from "../common/ChatRoomApi";

interface MessageProperties {
    message:Message;
}

export class MessageLine extends React.Component<MessageProperties,void> {

    render() {
        let html = this.props.message.text;
        html = html.replace(/</,'&lt;');
        html = html.replace(/`([^`]+)`/g,'<code>$1</code>');
        html = html.replace(/[*]([^*]+)[*]/g,'<em>$1</em>');
        html = html.replace(/[**]([^*]+)[**]/g,'<strong>$1</strong>');
        html = html.replace(/(@[-_\w]+)/g,'<strong>$1</strong>');
        html = html.replace(/\n/g,'<br>');
        return (
            <Media.ListItem>
                <Media.Left align="top">
                    <Image  width={40} height={40} src={this.props.message.avatar} rounded />
                </Media.Left>
                <Media.Body>
                    <Media.Heading>{this.props.message.senderName}</Media.Heading>
                    <div dangerouslySetInnerHTML={{__html:html}}></div>
                </Media.Body>
            </Media.ListItem>
        );
    }
}
