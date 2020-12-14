import React from 'react'
import s from './Profile.module.css'
import MyPosts from "./Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) =>{
    
    return <div>
        <h1>Profile</h1>

        <ProfileInfo  />

        <MyPosts posts={props.state.posts}/>
    </div>
}
export default Profile