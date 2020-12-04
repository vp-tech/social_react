import React from 'react'
import s from './Post.module.css'

const Post = () => {
    return <div className={s.item}>
        <img src='https://images.unsplash.com/photo-1603168231243-453c6e67c94d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'></img>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi corporis deleniti dolorem incidunt maiores
        nulla officiis perferendis saepe soluta vero.
        <div>
            <span>like</span>
        </div>
    </div>
}

export default Post