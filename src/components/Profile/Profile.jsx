import React from 'react'
import s from './Profile.module.css'
import MyPosts from "./Posts/MyPosts";

const Profile = () =>{
    return <div className={s.content}>
        <div>
            <img src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg' />
        </div>
        <div>
            ava + disc
        </div>
        <MyPosts />
    </div>
}
export default Profile