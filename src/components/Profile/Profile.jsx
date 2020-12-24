import React from 'react'
import s from './Profile.module.css'
import MyPosts from "./Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) =>{
    
    return <div>
        <h1>Profile</h1>

        <ProfileInfo  />

        <MyPosts posts={props.profilePage.posts}
                 newPostText={props.profilePage.newPostText}
                 dispatch={props.dispatch}
        />
    </div>
}
export default Profile