import { profileAPI, usersAPI } from "../API/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'



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
        case SAVE_PHOTO_SUCCESS:
                return { ...state, profileData: {...state.profileData, photos: action.photos}}
        default:                     ///если совпадений нет вернуть стейт
            return state; 
             }
}
///Создаем экшн криейтеры (ниже)
export const savePhotoSuccess = (photos) =>{
  return {type : SAVE_PHOTO_SUCCESS, photos}
}
export const addPostActionCreator = (postText) =>{
    return {type : ADD_POST, postText}
  }
export const setUsersProfile = (profileData) =>{
    return {type : SET_USER_PROFILE, profileData}
  }
export const getUsersProfile = (userId) => async(dispatch) =>{
    let response = await usersAPI.getProfile(userId)
    dispatch (setUsersProfile(response.data));        ////серvер вышлет в респонс Пользователей (приходят из response.data.items) и мы засетим их в пропс
  }
export const setStatus = (status) =>{
    return {type : SET_STATUS, status}
  }
  export const getUserStatus = (userId) => async (dispatch) =>{
    let response = await profileAPI.getStatus(userId)
    dispatch (setStatus(response.data));        
  }
  export const updateUserStatus = (status) => async (dispatch) =>{ 
    let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0){
            dispatch (setStatus(status));
            }
  }
  export const savePhoto = (file) => async (dispatch) =>{ 
    let response = await profileAPI.savePhoto(file)
        if (response.data.resultCode === 0){
            dispatch (savePhotoSuccess(response.data.data.photos));
            }
  }
  export const saveProfile = (profile) => async (dispatch, getState) =>{
    const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(profile)
        if (response.data.resultCode === 0){
            dispatch (getUsersProfile(userId));
            }
  }
  
  
export default profileReducer;