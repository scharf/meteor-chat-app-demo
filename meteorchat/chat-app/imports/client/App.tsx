import * as React from "react";
import { MessageLine } from "./MessageLine";
import { Message } from "../common/Messages";

// App component - represents the whole app
export class App extends React.Component<void,void> {
    private getMessages():Message[] {
        return [
            { _id: '1', text: 'Hello', senderName:'Michael' },
            { _id: '2', text: 'Hello', senderName:'Alexander' },
            { _id: '3', text: 'This is task 3', senderName:'Michael' },
        ];
    }

    private renderMessageLined() {
        return this.getMessages().map((message) => (
            <MessageLine key={message._id} message={message} />
        ));
    }

    render() {
        return (
            <div className="container">
                <header>
                    <h1>Messages</h1>
                </header>

                <div>
                    {this.renderMessageLined()}
                </div>
            </div>
        );
    }
}
