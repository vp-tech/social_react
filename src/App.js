import logo from './logo.svg';
import React from 'react'
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs"
import {Route} from "react-router-dom";
import {updatePostText} from "./redux/state";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav state={props.state.sidebar}/>
            <div className='app-wrapper-content'>

                <Route path='/dialogs'
                       render={() =>
                           <Dialogs state={props.state.dialogsPage}/>}/>
                <Route path='/profile'
                       render={() =>
                           <Profile profilePage={props.state.profilePage}
                                    addPost={props.addPost}
                                    updatePostText={props.updatePostText}
                           />}/>
            </div>
        </div>
    );
}


export default App;
