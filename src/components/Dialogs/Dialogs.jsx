import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem"
import Messages from "./Messages/Messages"
import {Redirect} from 'react-router-dom' 

const Dialogs = (props) => {
 
  let state=props.dialogPage;

  let DialogElements = state.dialogData.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));
  
  let MessageElements = state.messagesData.map((messageText) => (
    <Messages message={messageText.message} key={messageText.id} id={messageText.id} />
  ));
  let newMessageBody = state.newMessageBody;

  
  let onSendMessageClick = () => {
    props.sendMessage();
  };
  let onNewMessageChange = (el)=> {
    let body = el.target.value;
    props.updateNewMessageBody(body)
    ///props.store.dispatch(updateNewMessageBodyCreator(body));   //подставь в диспатч {type : UPDATE_NEW_POST_TEXT, newText : text}
  }
  console.log(props)
  
  if (!props.isAuth) return <Redirect to={"/login"}/>
  
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{DialogElements}</div>

      <div className={styles.messages}>
        <div>{MessageElements}</div>
        <div> 
        <div><textarea value = {newMessageBody} 
                       onChange = {onNewMessageChange}
                       placeholder="Enter You Message"></textarea></div>
        <div><button onClick={ onSendMessageClick }>Send</button></div>
        </div>
        </div>
     
    </div>
  );
};

export default Dialogs;
