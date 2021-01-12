import React from 'react'
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./Posts/MyPostsContainer";

const Profile = (props) =>{
    
    return <div>
        <h1>Profile</h1>

        <ProfileInfo  />

        <MyPostsContainer store={props.store}

                // posts={props.profilePage.posts}
                //  newPostText={props.profilePage.newPostText}
                //  dispatch={props.dispatch}
        />
    </div>
}
export default Profile