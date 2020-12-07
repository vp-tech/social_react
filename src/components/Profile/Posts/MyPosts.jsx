import React from 'react'
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return <div className={s.postsBlock}>
    <div>
        <h3>My posts</h3>
        <div>
            <div>New posts</div>
            <div><textarea></textarea></div>
            <div><button>Add post</button></div>
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