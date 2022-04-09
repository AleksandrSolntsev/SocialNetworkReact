import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import usersReducer from './users-reducer'
import authReducer from './auth-reducer'

let reducers = combineReducers ({
    profilePage : profileReducer,  /// Созданые ветки нашего стора
    dialogPage : dialogsReducer,
    usersPage : usersReducer,
    auth : authReducer
});
let store = createStore (reducers, applyMiddleware);

window.store = store;
export default store;