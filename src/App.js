import React from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer"

import { Route } from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";


const App = (props) => {

///store={props.store}
  return (
    
    //Создаем врапер в нем хедер, сайд бар и контент  dialogsState={props.state.dialogPage}
    // <BrowserRouter>
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
        <div className='app-wrapper-content'>
        
        <Route path='/profile/:userId?' render ={ () => <ProfileContainer/>}/>  
        <Route path='/dialogs' render ={() => <DialogsContainer store={props.store}/>}/> 
        <Route path='/news' element={<News />}/>
        <Route path='/music' element={<Music />}/>
        <Route path='/users' 
               render ={() => <UsersContainer />}/>
        <Route path='/settings' element={<Settings />}/>
        
      </div>
    </div>
    // </BrowserRouter>
  );
};
///<Route path='/profile/:userId' element ={<ProfileContainer/>}/>
export default App;
