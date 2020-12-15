import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialog.map(dialog => {
        return <DialogItem name={dialog.name} id={dialog.id}/>
    })

    let MessageElements = props.state.message.map(message => {
        return <Message message={message.message} from={message.from}/>
    })

    return <div className={s.title}>
        <h1>Dialogs</h1>
        <div className={s.dialogs }>
            <div className={s.dialogs__items}>
                {dialogsElements}
            </div>
            <div className={s.messages_back}>
                {MessageElements}
            </div>
        </div>
    </div>
}

export default Dialogs