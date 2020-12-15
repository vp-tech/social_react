import React from 'react'
import s from './Nav.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "../Dialogs/DialogItem/DialogItem";
import Friends from "./Friends/Frends";

const Nav = (props) => {

    let friendItem = props.state.my_friends.map((frend) =>{
        return <Friends name={frend.name}/>
    })

    return (
        <nav className={s.nav}>
            <div className={s.item} >
                <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}>Message</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
            </div>

            <div className={s.friendsBlock}>
                <h3>Friends</h3>
                <div className={s.friendsBlock__item}>
                    {friendItem}
                </div>
            </div>
        </nav>
    )
}
export default Nav