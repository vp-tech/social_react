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

    return <div className={s.title}>
        <h1>Dialogs</h1>
        <div className={s.dialogs}>

            <div className={s.dialogs_items}>

                <DialogItem name={dialogData[0].name} id={dialogData[0].id}/>
                <DialogItem name={dialogData[1].name} id={dialogData[1].id}/>
                <DialogItem name={dialogData[2].name} id={dialogData[2].id}/>


            </div>

            <div className={s.messages}>

                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
                <Message message={messageData[2].message}/>


            </div>


        </div>


    </div>

}

export default Dialogs