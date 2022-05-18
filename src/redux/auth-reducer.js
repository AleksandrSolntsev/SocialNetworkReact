import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../API/api";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHAURL_SUCCESS = 'GET_CAPTCHAURL_SUCCESS'

let initialState = {    //стартовые входные данные 
    userId: null,
    email: null,
    login: null,
    isAuth : false,
    captchaURL : null
      
}

const authReducer = (state = initialState, action) => {   ////если в стейт ничего не приходит, возми данные из initialState 
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, 
                ...action.payload,  // в созданом обьекте data будет лежать id email login (перезатрут ...state)
                }
        case GET_CAPTCHAURL_SUCCESS:
            return {
                ...state, 
                ...action.payload,  // в созданом обьекте data будет лежать id email login (перезатрут ...state)
                        }

        default:                     ///если совпадений нет вернуть стейт
        return state;
            }
}
///Создаем экшн криейтеры (ниже)
export const setAuthUserData = (userId, email, login, isAuth) =>{  
        return {type : SET_USER_DATA, payload : {userId, email, login, isAuth}}
  }
export const getCaptchaURLSuccess = (captchaURL) =>{  
    return {type : GET_CAPTCHAURL_SUCCESS, payload: {captchaURL}}
}
  

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me();
        if(response.data.resultCode === 0) { 
              let {id, login, email} = response.data.data 
              dispatch(setAuthUserData(id, email, login, true)); 
            }
           
}

export const login = (email, password, rememberMe, captcha) => async(dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)
        if(response.data.resultCode === 0) {
            dispatch(getAuthUserData()); 
            }  else {
                if (response.data.resultCode ===10){
                    dispatch(getCaptchaURL())
                }
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "some err" //сообщение -ответ сервера об ошибке (первое значение массива ответа)
                let action = stopSubmit("login", {_error: message});//стопаем всю форму с сообщением ошибки
                dispatch(action);
            }
}




export const getCaptchaURL = () => async(dispatch) => {
    const response = await securityAPI.getCaptchaURL();
        const captchaURL = response.data.url 
            dispatch(getCaptchaURLSuccess(captchaURL));             
}


export const logout = () => async(dispatch) => {
    let response = await authAPI.logout()
        if(response.data.resultCode === 0) { 
            dispatch(setAuthUserData(null, null, null, false)); 
            }            
}

  

export default authReducer; 