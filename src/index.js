import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store'
import {BrowserRouter} from "react-router-dom"
import {Provider} from 'react-redux'

///let renderEntireTree = () => {
///old app props state={state} dispatch={store.dispatch.bind(store)} store={store}
  ReactDOM.render(
      <BrowserRouter>
         <Provider store={store}>
             <App  />   
         </Provider>
      </BrowserRouter>, document.getElementById('root'));
///}
///renderEntireTree();
// store.subscribe(() => {renderEntireTree();});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

