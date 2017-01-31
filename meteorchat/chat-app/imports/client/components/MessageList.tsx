import * as React from "react";
import { MessageLine } from "./MessageLine";
import { Media } from "react-bootstrap";
import { Message } from "../../common/ChatRoomApi";

interface MessageListProps {
    messages:Message[];
}
export class MessageList extends React.Component<MessageListProps,void> {

    private renderMessageLined () {
        return this.props.messages.map((message) => (
            <MessageLine key={message._id} message={message}/>
        ));
    }

    render () {
        return (
            <Media.List >
                {this.renderMessageLined()}
            </Media.List>
        );
    }
}
