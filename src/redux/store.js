import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let store = {
  _state : {
    profilePage : {
     posts : [
        {id: 1, message:'Hi How AreYou??!', likes: 4},
        {id: 2, message:'Its my first post', likes: 7},
        {id: 3, message:'Its my second post!', likes: 10}
    ],
      newPostText : 'EnterText'
    },

    dialogPage : {  
     messagesData : [
          { id: 1, message: "Hi!" },
          { id: 2, message: "How are you?" },
          { id: 3, message: "Yo man!" }
        ],
      dialogData : [
          { name: "Dima", id: 1 },
          { name: "Sasha", id: 2 },
          { name: "Maxx", id: 3 },
          { name: "Frank", id: 4 },
          { name: "Vatson", id: 5 }
        ],
      newMessageBody : '' 

    }
},
_callSubscriber(){
  console.log('State changed');
},

  getState(){
  return this._state;
},
subscribe (observer){   ////Nabludatel Patern
  this._callSubscriber = observer;
},

dispatch (action) {  
  this._state.profilePage = profileReducer (this._state.profilePage, action);   /// { type: ADD-POST }
  this._state.dialogPage = dialogsReducer (this._state.dialogPage, action);
  this._callSubscriber(this._state); 
}

}

///export default store;
window.state = store;