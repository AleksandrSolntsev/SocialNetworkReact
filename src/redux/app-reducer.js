import { stopSubmit } from "redux-form";
import { authAPI } from "../API/api";
import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


let initialState = {    //стартовые входные данные 
    initialized: false,
          
}

const appReducer = (state = initialState, action) => {   ////если в стейт ничего не приходит, возми данные из initialState 
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state, 
                initialized: true,  // в созданом обьекте data будет лежать id email login (перезатрут ...state)
                }

        default:                     ///если совпадений нет вернуть стейт
        return state;
            }
}
///Создаем экшн криейтеры (ниже)
export const initilizedSuccess = () =>{  
        return {type : INITIALIZED_SUCCESS}
  }

export const initilizeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData()); //диспатч вернет промис
    //dispatch(somethingElse())
    //dispatch(somethingElse())
    Promise.all ([promise]).then(()=>{
        dispatch(initilizedSuccess())
    }); //Когда все промисы выполнятся, тогда Заиницилизируй
}
  

export default appReducer; 