import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`;
        return <div className={s.dialog} activeClassName={s.activeLink}>

        <div className={s.dialog__ava}>
            <img src="https://images.unsplash.com/photo-1607483421673-181fb79394b3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="dialog_ava"/>
        </div>

            <NavLink to={path}>{props.name}</NavLink>
    </div>
}

export default DialogItem