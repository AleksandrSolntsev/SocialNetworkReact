import { profileAPI, usersAPI } from "../API/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';



let initialState = {    //стартовые входные данные 
    posts : [
        {id: 1, message:'Hi How AreYou??!', likes: 4},
        {id: 2, message:'Its my first post', likes: 7},
        {id: 3, message:'Its my second post!', likes: 10}
    ],
      profileData: null,
      status: ""
}

const profileReducer = (state = initialState, action) => {   ////если в стейт ничего не приходит, возми данные из initialState 
   
    switch (action.type) {
        case ADD_POST:{
            let newPost = {
                id: 6,
                message : action.postText,
                likes : 0
                };
            return {
                ...state, posts: [...state.posts, newPost],
                    };
        }
        case SET_USER_PROFILE:
            return { ...state, profileData: action.profileData}
        case SET_STATUS:
                return { ...state, status: action.status}
        default:                     ///если совпадений нет вернуть стейт
            return state; 
             }
}
///Создаем экшн криейтеры (ниже)
export const addPostActionCreator = (postText) =>{
    return {type : ADD_POST, postText}
  }
export const setUsersProfile = (profileData) =>{
    return {type : SET_USER_PROFILE, profileData}
  }
export const getUsersProfile = (userId) => (dispatch) =>{
    return usersAPI.getProfile(userId).then(response => {
        dispatch (setUsersProfile(response.data));        ////серvер вышлет в респонс Пользователей (приходят из response.data.items) и мы засетим их в пропс
               
      });
  }
export const setStatus = (status) =>{
    return {type : SET_STATUS, status}
  }
  export const getUserStatus = (userId) => (dispatch) =>{
    return profileAPI.getStatus(userId).then(response => {
        dispatch (setStatus(response.data));        
        });
  }
  export const updateUserStatus = (status) => (dispatch) =>{ ///
    return profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0){
        dispatch (setStatus(status));
            }        
        });
  }
  
  
export default profileReducer;