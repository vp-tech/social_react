import React from 'react'
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        {id: 1, post: 'Hi, how are you?', likeCount: 11},
        {id: 2, post: 'My better trip, start soon!!!', likeCount: 42},
        {id: 3, post: 'This is my first post', likeCount: 21},
        {id: 4, post: 'Lorem ipsum dolor sit amet.', likeCount: 3},
        {id: 5, post: 'Hi there', likeCount: 8},
        {id: 6, post: 'Surprise for you', likeCount: 14}
    ]
    return <div className={s.postsBlock}>
        <div>
            <h3>My posts</h3>
            <div>
                <div>New posts</div>
                <div><textarea></textarea></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
        </div>
        <div className={s.posts}>
            <Post message={postData[0].post} like={postData[0].likeCount}/>
            <Post message={postData[1].post} like={postData[1].likeCount}/>
            <Post/>
        </div>
    </div>
}

export default MyPosts