import React from 'react'
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {

    const posts = props.posts

    let postElement = posts.map(post => <Post message={post.post} like={post.likeCount}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value
        alert(text)
    }



    return <div className={s.postsBlock}>
        <div>
            <h3>My posts</h3>
            <div>
                <div>New posts</div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
        </div>
        <div className={s.posts}>
            {postElement}
        </div>
    </div>
}

export default MyPosts