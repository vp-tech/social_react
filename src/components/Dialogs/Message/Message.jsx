import s from "./Message.module.css";
import React from "react";

const Message = (props) => {
    return <div className={s.message}>
        <div className={s.message__ava}>
            <img src="https://images.unsplash.com/photo-1604315980510-f09f0de7d14c?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0fHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="message-ava"/>
        </div>
        <div>
            {props.message}
        </div>
    </div>
}

export default Message