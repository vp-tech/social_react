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

    let sendMessageButton = React.createRef()

    let addMessage = () => {
        let message = sendMessageButton.current.value
        alert (message)
    }


    return <div className={s.title}>
        <h1>Dialogs</h1>
        <div className={s.dialogs }>
            <div className={s.dialogs__items}>
                {dialogsElements}
            </div>
            <div className={s.messages_back}>
                {MessageElements}
                <textarea ref={sendMessageButton} cols="90" rows="3"></textarea>
                <button onClick={addMessage}>Send</button>
            </div>
        </div>
    </div>
}

export default Dialogs