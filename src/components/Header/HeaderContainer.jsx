import React from "react";
import Header from "./Header"
import { connect } from "react-redux";
import {logout } from "../../redux/auth-reducer";




class HeaderContainer extends React.Component{

    ///this.props.toggleIsFetching(true);
    // authAPI.me().then(response => {
        
    // if(response.data.resultCode === 0) { //resultCode === 0 - если сервер ответил что мы залогинены 
    //       let {id, login, email} = response.data.data //Взять данные переменных из responce.data 
    //       this.props.setAuthUserData(id, email, login);  //отдать редьюсеру значения. Последовательность важна (как в редьюсере)
    //     }
    //    // this.props.setUsers(response.data.items);        ////серvер вышлет в респонс Пользователей (приходят из response.data.items) и мы засетим их в пропс
    //    // this.props.setTotalUsersCount(response.data.totalCount);
    //    /// this.props.toggleIsFetching(false);
    //     });
  
  
  render () {
    return <Header {...this.props} />
  }


}
const mapStateToProps = (state) => ({
  isAuth : state.auth.isAuth,  //auth в редакс сторе. Передаем пропсами в Контейнер и в хедер для отображения
  login : state.auth.login
});
export default connect (mapStateToProps, {logout})(HeaderContainer);

  