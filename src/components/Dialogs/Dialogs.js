import React from "react";
import './Dialogs.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";

const Dialogs = ({ dialogsPage, onSendMessage, updateNewMessageChange }) => {

    let dialogs = dialogsPage.dialogData.map(d => <DialogItem name={ d.name } id={ d.id } />);
    let messages = dialogsPage.messageData.map(m => <Message message={ m.message } id={ m.id } />);
    let newMessageBody = dialogsPage.newMessageBody;

    let onSendMessageClick = () => {
        if (newMessageBody) {
            onSendMessage();
        }
    };

    let onNewMessageChange = (e) => {
        let text = e.target.value;
        updateNewMessageChange(text);
    };

    return (
        <div className='dialogs'>
            <div className='dialog-items'>
                { dialogs }
            </div>
            <div className='messages'>
                <div>{ messages }</div>
                    <div>
                        <div>
                             <textarea value={ newMessageBody }
                                       onChange={ onNewMessageChange }
                                       placeholder="Enter your message" />
                        </div>
                    <div>
                        <button onClick={ onSendMessageClick }>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;

