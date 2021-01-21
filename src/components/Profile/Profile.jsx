import React from 'react'
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./Posts/MyPostsContainer";

const Profile = () =>{
    
    return <div>
        <h1>Profile</h1>

        <ProfileInfo  />

        <MyPostsContainer />
    </div>
}
export default Profile