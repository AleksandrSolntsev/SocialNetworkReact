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
    totalUsersCount : 0,
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
            return {...state, users: state.users.map(u => { /// Мапим старый масив и его же возвращаем users: state.users.map(u => u) = []...state.users]
                if(u.id === action.userId){
                    return {...u, followed: true} //Если ИД совпал, делаем копию Пользователя (u), и в нем меняем followed
                } 
                return u; //Усли ИД не совпал, возвращаем тот же объект
            
            })}
        case UNFOLLOW:
            return {...state, users: state.users.map(u => { /// Мапим старый масив и его же возвращаем users: state.users.map(u => u) = []...state.users]
                if(u.id === action.userId){
                    return {...u, followed: false} //Если ИД совпал, делаем копию Пользователя (u), и в нем меняем followed
                } 
                return u; //Усли ИД не совпал, возвращаем тот же объект
            
            })}
        case SET_USERS:
            return { ...state, users: action.users} //взять копию старых Юзеров и дописать их из экшена. ТАк как их много, ставим спрет опер-р
        
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage}

        case SET_TOTAL_COUNT:
            return { ...state, totalUsersCount: action.count}
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return { ...state, followingInProgress: action.isFetching 
                ? [...state.followingInProgress, action.userId] 
                : state.followingInProgress.filter(id => id != action.userId) }
                    
        default:                     ///если совпадений нет вернуть стейт
        return state;
            }
}
///Создаем экшн криейтеры (ниже)
export const follow = (userId) =>{  //follow action creator - Чистая функция которая возвращает экшн
    return {type : FOLLOW, userId}
  }
export const unfollow = (userId) =>{
    return {type : UNFOLLOW, userId}
  }

export const setUsers = (users) => { //AC котрый будет устанавливать юзеров
    return {type : SET_USERS, users}
}
export const setCurrentPage = (currentPage) =>{
    return {type : SET_CURRENT_PAGE, currentPage}
  }
export const setTotalUsersCount = (totalUsersCount) =>{
    return {type : SET_TOTAL_COUNT, count:totalUsersCount} 
}
export const toggleIsFetching = (isFetching) =>{
    return {type : TOGGLE_IS_FETCHING, isFetching} 
}
export const toggleFollowingInProgress = (isFetching, userId) =>{
    return {type : TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId} 
}

export const getUsersThunkCreator = (currentPage, pageSize) => {} 
return (dispatch) => {
    dispatch (toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));        ////серvер вышлет в респонс Пользователей (приходят из response.data.items) и мы засетим их в пропс
            dispatch(setTotalUsersCount(data.totalCount));
            
            });
        }

}


export default usersReducer; 