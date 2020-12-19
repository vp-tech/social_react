let rerenderEntireTree = () =>{
    console.log('State is changer')
}

let state = {
    profilePage: {
        posts: [
            {id: 1, post: 'Hi, how are you?', likeCount: 11},
            {id: 2, post: 'My better trip, start soon!!!', likeCount: 42},
            {id: 3, post: 'This is my first post', likeCount: 21},
            {id: 4, post: 'Lorem ipsum dolor sit amet.', likeCount: 3},
            {id: 5, post: 'Hi there', likeCount: 8},
            {id: 6, post: 'Surprise for you', likeCount: 14},
            {id: 7, post: 'it was too easy', likeCount: 8},
            {id: 8, post: 'i do IT', likeCount: 14}
        ],
        newPostText : 'New Post Text.'
    },


    dialogsPage: {
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
    },

    sidebar: {
        my_friends: [
            {id: 1, name: 'user1'},
            {id: 2, name: 'user2'},
            {id: 3, name: 'user3'}
        ]
    }

}

window.state =state


export const addPost = () => {
    let newPost = {
        id: 9,
        post: state.profilePage.newPostText,
        likeCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText= ''
    rerenderEntireTree(state)
}

export const updatePostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}


export const addMessage = () => {
    let newMessage = {
        id: 9,
        message: state.dialogsPage.newMessageText,
        from: 'i'
    }

    state.dialogsPage.message.push(newMessage)

    state.dialogsPage.newMessageText= ''
    rerenderEntireTree(state)
}

export const updateMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}

export default state