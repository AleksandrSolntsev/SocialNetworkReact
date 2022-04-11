import { authAPI } from "../API/api";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {    //стартовые входные данные 
    userId: null,
    email: null,
    login: null,
    isAuth : false
    
      
}

const authReducer = (state = initialState, action) => {   ////если в стейт ничего не приходит, возми данные из initialState 
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, 
                ...action.data,  // в созданом обьекте data будет лежать id email login (перезатрут ...state)
                isAuth : true
            }

        default:                     ///если совпадений нет вернуть стейт
        return state;
            }
}
///Создаем экшн криейтеры (ниже)
export const setAuthUserData = (userId, email, login) =>{  
        return {type : SET_USER_DATA, data : {userId, email, login}}
  }

export const getAuthUserData = () => (dispatch) => {
    return authAPI.me().then(response => {
        if(response.data.resultCode === 0) { 
              let {id, login, email} = response.data.data 
              dispatch(setAuthUserData(id, email, login)); 
            }
            });
}

  

export default authReducer; 