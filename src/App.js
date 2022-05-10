import React, { Component, Suspense } from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

//import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer"
import {initilizeApp} from "./redux/app-reducer";
import { Route } from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import LoginPage from "./components/Login/login";
import { connect } from "react-redux";
import { compose } from "redux";
import {withRouter} from "react-router-dom"
import Preloader from "./components/common/Preloader/Preloader";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));


class App extends Component {
  componentDidMount (){
    this.props.initilizeApp();
}
///store={props.store}
  render(){  
    if(!this.props.initialized) {
      return <Preloader/>
    }
  return (
    
    //Создаем врапер в нем хедер, сайд бар и контент  dialogsState={props.state.dialogPage}
    
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
        <div className='app-wrapper-content'>
        
        <Route path='/profile/:userId?' 
          render ={ () => <ProfileContainer/>}/>  
        <Route path='/dialogs' 
          render ={() => {return (
            <div>
              <Suspense fallback={<div>Загрузка...</div>}>
              <DialogsContainer />
              </Suspense>
            </div>
          );}
          }/> 
        <Route path='/news' 
          render={() =><News />}/>
        <Route path='/music' 
          render={() =><Music />}/>
        <Route path='/users' 
               render ={() => <UsersContainer />}/>
        <Route path='/settings' 
          render={() =><Settings />}/>
        <Route path='/login' 
          render={() =><LoginPage />}/>
        
      </div>
    </div>
   
  );
}
};
///<Route path='/profile/:userId' element ={<ProfileContainer/>}/>
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
export default compose(withRouter ,
  connect (mapStateToProps, {initilizeApp}))(App);

