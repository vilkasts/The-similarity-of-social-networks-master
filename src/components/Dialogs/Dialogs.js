import React from "react";
import './Dialogs.css'
import {NavLink} from "react-router-dom";


const DialogItem = ({name, id}) => {
  return (
      <div className='dialog'>
        <NavLink className='dialogLink' to={'/Dialogs/' + id}> {name} </NavLink>
      </div>
  )
}

const Message = ({message}) => {
  return (
      <div className="message">
        {message}
      </div>
  )
}

const Dialogs = (props) => {

    let dialogData = [
        {id: 1, name: 'Kolyunya'},
        {id: 2, name: 'Vitechka'},
        {id: 3, name: 'Alesyundra'},
        {id: 4, name: 'Nikitiy'},
        {id: 5, name: 'Egoriy'},
        {id: 6, name: 'Alkashiy'},
        {id: 7, name: 'Valeriy'}
    ];

    let messageData = [
        {id: 1, message: 'Gamarjoba'},
        {id: 2, message: 'Ho'},
        {id: 3, message: 'Genacvale'}
    ];

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

