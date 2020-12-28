const ADD_POST = 'ADD-POST'
const UPDATE_POST_NEXT = 'UPDATE-POST-NEXT'

let initialState =  {
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
}

const  profileReducer = (state = initialState, action) =>{
    switch (action.type){
        case ADD_POST:
            let newPost = {
                id: 9,
                post: state.newPostText,
                likeCount: 0
            }
            state.posts.push(newPost)
            state.newPostText= ''
            return state

        case UPDATE_POST_NEXT:
            state.newMessageText = action.newText
            return state

        default:
            return state
    }
}

export const addPostActionCreator = () => {
    return {
        type : ADD_POST
    }
}

export const updatePostTextActionCreator = (text) => {
    return {
        type : UPDATE_POST_NEXT,
        newText: text
    }
}


export default profileReducer