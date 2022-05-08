import React from "react";
import './Dialogs.css'
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import { useDispatch, useSelector } from "react-redux";
import Dialogs from "./Dialogs";

const DialogsContainer = () => {

    let state = useSelector(state => state).dialogsPage;
    let dispatch = useDispatch();

    let onSendMessage = () => {
        dispatch(sendMessageCreator());
    };

    let updateNewMessageChange = (text) => {
        dispatch(updateNewMessageBodyCreator(text));
    };

    return <Dialogs onSendMessage = { onSendMessage }
                    updateNewMessageChange = { updateNewMessageChange }
                    dialogsPage={ state }/>
}

export default DialogsContainer;

