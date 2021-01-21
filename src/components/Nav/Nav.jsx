import s from "./Nav.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const Nav = (props) =>{

    return <nav className={s.nav}>
        <div className={s.item}>
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
                {props.friendItem}
            </div>
        </div>
    </nav>
}

export default Nav