import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from "./Message/Message";
const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialog.map(dialog => {
        return <DialogItem name={dialog.name} id={dialog.id}/>
    })
    let MessageElements = state.message.map(message => {
        return <Message message={message.message} from={message.from}/>
    })
    let newMessageText = state.newMessageText


    let onAddMessage = () => {
        props.sendMessage()
    }
    let updateMessageText = (event) => {
        //target в данном случае textarea которая вызываетэту функцию
        let text = event.target.value
        props.updateMessageBody(text)
    }


    return <div className={s.title}>
        <h1>Dialogs</h1>
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                {dialogsElements}
            </div>

            <div className={s.messages_back}>
                {MessageElements}
                <div><textarea value={newMessageText}
                               placeholder={'Enter Your Message'}
                               onChange={updateMessageText}
                               cols='90' rows='4'

                    />
                </div>
                <div>
                    <button onClick={onAddMessage}>Send</button>
                </div>
            </div>
        </div>
    </div>
}

export default Dialogs