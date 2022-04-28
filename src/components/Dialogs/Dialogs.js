import React from "react";
import './Dialogs.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";


const Dialogs = ({ dialogData, messageData }) => {

    let dialogs = dialogData.map(d => <DialogItem name={d.name} id={d.id} />);
    let messages = messageData.map(m => <Message message={m.message} id={m.id} />);

  return (
    <div className='dialogs'>
      <div className='dialog-items'>
          { dialogs }
      </div>
      <div className='messages'>
          { messages }
      </div>
    </div>
  )
}

export default Dialogs;

