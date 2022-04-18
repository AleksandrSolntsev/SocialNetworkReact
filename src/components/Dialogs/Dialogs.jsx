import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem"
import Messages from "./Messages/Messages"
import {Redirect} from 'react-router-dom' 
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, requiredField } from "../../utils/validators/validators";

const Dialogs = (props) => {
 
  let state=props.dialogPage;

  let DialogElements = state.dialogData.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));
  
  let MessageElements = state.messagesData.map((messageText) => (
    <Messages message={messageText.message} key={messageText.id} id={messageText.id} />
  ));
  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
  };
  
 
  if (!props.isAuth) return <Redirect to={"/login"}/>
  
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{DialogElements}</div>

      <div className={styles.messages}>
        <div>{MessageElements}</div>

        </div>
     <AddMessageFormRedux onSubmit={addNewMessage}/>
    </div>
  );
};


const maxLength10 = maxLengthCreator(10);
const AddMessageForm = (props) =>{
  return (
    <form onSubmit={props.handleSubmit}> 
    <div>
      <Field component={Textarea} validate={[requiredField, maxLength10 ]} name={"newMessageBody"} placeholder={"Enter You Message"} />
    </div>
    <div><button>Send</button></div>
    </form>
  )
}
const AddMessageFormRedux = reduxForm ({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;
