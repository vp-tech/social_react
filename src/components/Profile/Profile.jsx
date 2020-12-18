import React from 'react'
import s from './Profile.module.css'
import MyPosts from "./Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) =>{
    
    return <div>
        <h1>Profile</h1>

        <ProfileInfo  />

        <MyPosts posts={props.profilePage.posts}
                 addPost={props.addPost}
                 updatePostText = {props.updatePostText}
                 newPostText={props.profilePage.newPostText}/>
    </div>
}
export default Profile