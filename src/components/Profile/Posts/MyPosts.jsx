import React from 'react'
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/state"

const MyPosts = (props) => {

    const posts = props.posts

    let postElement = posts.map(post => <Post message={post.post} like={post.likeCount}/>)

    let newPostElement = React.createRef()


    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.dispatch(updatePostTextActionCreator(text))
    }


    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>New posts</div>
        <div>
            <textarea ref={newPostElement}
                      onChange={onPostChange}
                      value={props.newPostText}
            />
        </div>
        <div>
            <button onClick={addPost}>Add post</button>
        </div>
        <div className={s.posts}>
            {postElement}
        </div>
    </div>
}

export default MyPosts