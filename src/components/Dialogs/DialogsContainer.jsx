import React from "react";
import Dialogs from "./Dialogs"
import {updateNewMessageBodyCreator} from "../../redux/dialogs-reducer"
import {sendMessageCreator} from "../../redux/dialogs-reducer"
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";


let mapStateToProps = (state) => {
  return {
  dialogPage: state.dialogPage,        ///Перерисуй Диалоги когда изменится state.dialogPage 
  
  
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) =>{
    dispatch(updateNewMessageBodyCreator(body));
  },
  sendMessage: () =>{
    dispatch(sendMessageCreator())
  }
}
}
let authRedirectComponent = withAuthRedirect (Dialogs);
const DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(authRedirectComponent);

export default DialogsContainer;
