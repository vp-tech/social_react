import React from 'react'
import {addMessageActionCreater, updateMessageTextActionCreator} from "../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage


    let addMessage = () => {
        props.store.dispatch(addMessageActionCreater())
    }
    let updateMessageText = (body) => {
        props.store.dispatch(updateMessageTextActionCreator(body))
    }


    return <Dialogs
            dialogsPage={state}
            updateMessageBody={updateMessageText}
            sendMessage={addMessage}

    />

}

export default DialogsContainer