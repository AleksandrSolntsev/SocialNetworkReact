import React from "react";
import { connect } from "react-redux";
import { follow, toggleFollowingInProgress, getUsersThunkCreator } from "../../redux/users-reducer";
import { unfollow } from "../../redux/users-reducer";
import { setCurrentPage } from "../../redux/users-reducer";
import Users from "./Users"
import Preloader from "../common/Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";



class UsersAPIComponent extends React.Component {
    constructor (props) { ///конструктор срабатывает всего один раз когда мы переходим на страницу
        super(props);   ///Их можно не писать потому как больше они ничего не делают
        
    }
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        // this.props.toggleIsFetching(true);    СТАРЫЙ КОД
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.setUsers(data.items);        ////серvер вышлет в респонс Пользователей (приходят из response.data.items) и мы засетим их в пропс
        //     this.props.setTotalUsersCount(data.totalCount);
        //     this.props.toggleIsFetching(false);
        //     });
    }
    onPageChanged = (pageNumber) =>{
        this.props.getUsers(pageNumber, this.props.pageSize);

        // this.props.setCurrentPage(pageNumber);
        // this.props.toggleIsFetching(true);
        // usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        //     this.props.setUsers(data.items)
        //     this.props.toggleIsFetching(false);
        // });
    }   
         
    render () {
        return <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users totalUsersCount = {this.props.totalUsersCount}
                      onPageChanged = {this.onPageChanged}
                      pageSize = {this.props.pageSize}  
                      currentPage = {this.props.currentPage}
                      users = {this.props.users}
                      unfollow = {this.props.unfollow}
                      follow = {this.props.follow}
                      followingInProgress = {this.props.followingInProgress}
                      />
                      </>
}    
}


let mapStateToProps = (state) => {  ///ф-я принимает весь стейт целиком и возвращает объект только с нужными данными 
    return {
        users: state.usersPage.users,    ///В компоненту USERS прийдут юзери из стейта в пропсах 
        pageSize : state.usersPage.pageSize,
        totalUsersCount : state.usersPage.totalUsersCount,
        currentPage : state.usersPage.currentPage,
        isFetching : state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
let authRedirectComponent = withAuthRedirect (UsersAPIComponent);
export default connect (mapStateToProps, {                                 //Передает стору экшены 
    follow,    //Диспатчим результат работы followAC для userId
    unfollow, /// была запись unfollow: unfollowAC переименовали unfollowAC в unfollow, поэтому можно указать только unfollow в параметрах
    
    
    toggleFollowingInProgress,
    getUsers: getUsersThunkCreator    
})(authRedirectComponent);

// let mapDispatchToProps = (dispatch) => {  //функция которая передает в Users/ колбеки котрые презентационная комп-та может вызывать 
//     return {                                 //Передает стору экшены 
//         follow: (userId) => {
//             dispatch(followAC(userId))    //Диспатчим результат работы followAC для userId
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
        
// }
// }