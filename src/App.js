import logo from './logo.svg';
import React from 'react'
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile"; 
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav state={props.state.sidebar}/>
            <div className='app-wrapper-content'>

                <Route path='/dialogs'
                       render={() =>
                           <DialogsContainer
                               store={props.store}
                           />}/>
                <Route path='/profile'
                       render={() =>
                           <Profile
                               store = {props.store}
                           />}/>
            </div>
        </div>
    );
}


export default App;
