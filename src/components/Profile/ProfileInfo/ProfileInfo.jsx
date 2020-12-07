import React from 'react'
import s from './Profile.module.css'

const ProfileInfo = (props) =>{
    return <div>
        <div>
            <img src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg' alt='background'/>
        </div>
        <div className={s.profileDescription}>
            ava + disc
        </div>
    </div>
}

export default ProfileInfo