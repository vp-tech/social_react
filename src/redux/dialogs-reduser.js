const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

let initialState = {
    dialog: [
        {id: 1, name: 'user1'},
        {id: 2, name: 'user2'},
        {id: 3, name: 'user3'},
        {id: 4, name: 'user4'},
        {id: 5, name: 'user5'},
        {id: 6, name: 'user6'}
    ],
    message: [
        {id: 1, message: 'hi', from: 'i'},
        {id: 2, message: 'How are you', from: 'q'},
        {id: 3, message: 'lorem dolor', from: 'i'},
        {id: 4, message: 'Lorem ipsum dolor sit amet.',from: 'q'},
        {id: 5, message: 'Hi there', from: 'i'},
        {id: 6, message: 'Surprise for you', from: 'q'}
    ],
    newMessageText : 'New Message'
}

const  dialogsReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_MESSAGE:{

            let newMessage = {
                id: 9,
                message: state.newMessageText,
                from: 'i'
            }
            let stateCopy = {...state}
            stateCopy.dialog = [...state.dialog]
            stateCopy.message = [...state.message]
            stateCopy.message.push(newMessage)
            stateCopy.newMessageText = ''
            return stateCopy

        }
        case UPDATE_MESSAGE_TEXT:{
            let stateCopy = {...state}
            stateCopy.newMessageText = <action className="newText"></action>
            return stateCopy

        }
        default:
            return state
    }

}


export const addMessageActionCreater = () =>{
    return {
        type : ADD_MESSAGE
    }
}
export const updateMessageTextActionCreator = (text) => {
    return {
        type : UPDATE_MESSAGE_TEXT,
        newText : text
    }
}


export default dialogsReducer