import React from 'react'
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return <div>
    <div>
        My posts
        <div>
            New posts
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove</button>
        </div>
    </div>
    <div className={s.posts}>
        <Post message='Hi, how are you?' like='15' />
        <Post message='This is my first post' like='13'/>
        <Post />
    </div>
    </div>
}

export default MyPosts