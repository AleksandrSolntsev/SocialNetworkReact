import { usersAPI } from "../API/api"
import { updateObjectInArray } from "../utils/object-helpers";
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';



let initialState = {    //стартовые входные данные 
    users : [],
    pageSize : 5,
    totalItemsCount : 0,
    currentPage : 1,
    isFetching : false,
    followingInProgress: []
    // users : [
    //     {id: 1, photoUrl: 'https://pngimg.com/uploads/cat/cat_PNG50549.png', followed: true, fullNAme:'Alex', status: 'HappyNow!', location:{city: 'ZP', country:'UA'} },
    //     {id: 2, photoUrl: 'https://pngimg.com/uploads/cat/cat_PNG50547.png', followed: false, fullNAme:'Dima', status: 'Jahoo!', location:{city: 'DP', country:'UA'} },
    //     {id: 3, photoUrl: 'https://pngimg.com/uploads/cat/cat_PNG50533.png', followed: true, fullNAme:'Maximus', status: 'YoMan!', location:{city: 'ZP', country:'UA'} },
    // ],
     
}

const usersReducer = (state = initialState, action) => {   ////если в стейт ничего не приходит, возми данные из initialState 
   
    switch (action.type) {
        case FOLLOW:
            return {...state, 
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
        }
        case UNFOLLOW:
            return {...state, 
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }
        case SET_USERS:
            return { ...state, users: action.users} //взять копию старых Юзеров и дописать их из экшена. ТАк как их много, ставим спрет опер-р
        
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage}

        case SET_TOTAL_COUNT:
            return { ...state, totalItemsCount: action.count}
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return { ...state, followingInProgress: action.isFetching 
                ? [...state.followingInProgress, action.userId] 
                : state.followingInProgress.filter(id => id !== action.userId) }
                    
        default:                     ///если совпадений нет вернуть стейт
        return state;
            }
}
///Создаем экшн криейтеры (ниже)
export const followSuccess = (userId) =>{  //follow action creator - Чистая функция которая возвращает экшн
    return {type : FOLLOW, userId}
  }
export const unfollowSuccess = (userId) =>{
    return {type : UNFOLLOW, userId}
  }

export const setUsers = (users) => { //AC котрый будет устанавливать юзеров
    return {type : SET_USERS, users}
}
export const setCurrentPage = (currentPage) =>{
    return {type : SET_CURRENT_PAGE, currentPage}
  }
export const setTotalItemsCount = (totalItemsCount) =>{
    return {type : SET_TOTAL_COUNT, count:totalItemsCount} 
}
export const toggleIsFetching = (isFetching) =>{
    return {type : TOGGLE_IS_FETCHING, isFetching} 
}
export const toggleFollowingInProgress = (isFetching, userId) =>{
    return {type : TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId} 
}

export const getUsersThunkCreator = (currentPage, pageSize) => {
return async(dispatch) => {
            dispatch (toggleIsFetching(true));
            dispatch(setCurrentPage(currentPage));

            let data = await usersAPI.getUsers(currentPage, pageSize);
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));        ////серvер вышлет в респонс Пользователей (приходят из response.data.items) и мы засетим их в пропс
            dispatch(setTotalItemsCount(data.totalCount));
        }
}
const followUnfollowFlow = async(dispatch, userId, apiMethod, actionCreator) => {
    dispatch (toggleFollowingInProgress(true, userId));
    let response = await apiMethod(userId)
        if (response.data.reaultCode === 0){
            dispatch(actionCreator(userId));
        }
        dispatch(toggleFollowingInProgress(false, userId));
}
export const follow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
        }
    }

export const unfollow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
            }
        }

export default usersReducer; 