import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = `/dialogs/${props.id}`;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {


    return <div className={s.message}>
        {props.message}
    </div>
}

const Dialogs = () => {

    let dialogData = [
        {id: 1, name: 'user1'},
        {id: 2, name: 'user2'},
        {id: 3, name: 'user3'},
        {id: 4, name: 'user4'},
        {id: 5, name: 'user5'},
        {id: 6, name: 'user6'}
    ]

    let messageData = [
        {id: 1, message: 'hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'lorem dolor'},
        {id: 4, message: 'Lorem ipsum dolor sit amet.'},
        {id: 5, message: 'Hi there'},
        {id: 6, message: 'Surprise for you'}
    ]

    let dialogsElements = dialogData.map(dialog => {
        return <DialogItem name={dialog.name} id={dialog.id}/>
    })
    
    let MessageElements = messageData.map(message => {
        return <Message message={message.message}/>
    })

    return <div className={s.title}>
        <h1>Dialogs</h1>
        <div className={s.dialogs}>

            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {MessageElements}
            </div>
        </div>
    </div>
}

export default Dialogs