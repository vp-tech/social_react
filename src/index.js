import './index.css';
import state from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updatePostText, updateMessageText, addMessage, subscribe} from './redux/state'
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state}
                     addPost={addPost}
                     updatePostText={updatePostText}
                     addMessage={addMessage}
                     updateMessageText={updateMessageText}
                />
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state)

subscribe (rerenderEntireTree)