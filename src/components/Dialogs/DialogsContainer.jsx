import React from 'react'
import {addMessageActionCreater, updateMessageTextActionCreator} from "../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

//f1 или mapStateToProps функиция для данных
const mapStateToProps = (state) =>{
    return{
        dialogsPage:state.dialogsPage

    }
}

//f2 или mapDispatchToProps функция для коллбеков
const mapDispatchToProps = (dispatch) => {
    return{
        updateMessageBody : (body) => {
            dispatch(updateMessageTextActionCreator(body))
        },
        sendMessage : () => {
            dispatch(addMessageActionCreater())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer