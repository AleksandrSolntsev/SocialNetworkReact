const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {    //стартовые входные данные 
    posts : [
        {id: 1, message:'Hi How AreYou??!', likes: 4},
        {id: 2, message:'Its my first post', likes: 7},
        {id: 3, message:'Its my second post!', likes: 10}
    ],
      newPostText : 'EnterText',
      profileData: null,
      
}

const profileReducer = (state = initialState, action) => {   ////если в стейт ничего не приходит, возми данные из initialState 
   
    switch (action.type) {
        case ADD_POST:{
            let newPost = {
                id: 5,
                message : state.newPostText,
                likes : 0
                };
                
            return {
                ...state, posts: [...state.posts, newPost],
                newPostText : ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}; 
            stateCopy.newPostText = action.newText;
            return stateCopy;
            }
        case SET_USER_PROFILE:
            return { ...state, profileData: action.profileData}
            
        default:                     ///если совпадений нет вернуть стейт
            return state; 
             }
}
///Создаем экшн криейтеры (ниже)
export const addPostActionCreator = () =>{
    return {type : ADD_POST}
  }
export const setUsersProfile = (profileData) =>{
    return {type : SET_USER_PROFILE, profileData}
  }
export const updateNewPostTextActionCreator = (text) =>{
    return {type : UPDATE_NEW_POST_TEXT, newText : text}
  }

  
  
export default profileReducer;