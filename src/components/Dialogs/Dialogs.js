import React from "react";
import './Dialogs.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";


const Dialogs = ({ dialogsPage, dispatch }) => {

    let dialogs = dialogsPage.dialogData.map(d => <DialogItem name={d.name} id={d.id} />);
    let messages = dialogsPage.messageData.map(m => <Message message={m.message} id={m.id} />);
    let newMessageBody = dialogsPage.newMessageBody;

let onSendMessageClick = () => {
    if (newMessageBody) {
        dispatch(sendMessageCreator());
    }
};

let onNewMessageChange = (e) => {
    let body = e.target.value;
    dispatch(updateNewMessageBodyCreator(body))
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
                  <textarea value={newMessageBody}
                            onChange={onNewMessageChange}
                            placeholder="Enter your message" />
              </div>
              <div>
                  <button onClick={onSendMessageClick}>Send</button>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Dialogs;

