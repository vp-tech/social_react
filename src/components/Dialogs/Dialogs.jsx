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
    return <div className={s.title}>
        <h1>Dialogs</h1>
        <div className={s.dialogs}>

            <div className={s.dialogs_items}>

                <DialogItem name='user1' id='1'/>
                <DialogItem name='user2' id='2'/>
                <DialogItem name='user3' id='3'/>
                <DialogItem name='user4' id='4'/>
                <DialogItem name='user5' id='5'/>

            </div>

            <div className={s.messages}>

                <Message message={'first message'} />
                <Message message={'lorem dolor'} />
                <Message message={'Lorem ipsum dolor sit amet.'} />


            </div>


        </div>


    </div>

}

export default Dialogs