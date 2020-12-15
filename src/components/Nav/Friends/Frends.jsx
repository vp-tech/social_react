import React from 'react'
import s from './Frends.module.css'

const Friends = (props) => {

    return <div className={s.friends}>
        <img src="https://images.unsplash.com/photo-1607483421673-181fb79394b3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="friend-suggestion"/>
        <div className={s.friends__name}>
            {props.name}
        </div>
    </div>
}

export default Friends