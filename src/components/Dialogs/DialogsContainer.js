import React from "react";
import './Dialogs.css'
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = ({ store }) => {

    let state = store.getState().dialogsPage;

    let onSendMessage = () => {
        store.dispatch(sendMessageCreator());
    };

    let updateNewMessageChange = (text) => {
        store.dispatch(updateNewMessageBodyCreator(text));
    };

    return <Dialogs onSendMessage = { onSendMessage }
                    updateNewMessageChange = { updateNewMessageChange }
                    dialogsPage={ state }/>
}

export default DialogsContainer;

