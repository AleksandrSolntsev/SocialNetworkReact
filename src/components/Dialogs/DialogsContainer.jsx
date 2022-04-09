import React from "react";
import Dialogs from "./Dialogs"
import {updateNewMessageBodyCreator} from "../../redux/dialogs-reducer"
import {sendMessageCreator} from "../../redux/dialogs-reducer"
import { connect } from "react-redux";


let mapStateToProps = (state) => {
  return {
  dialogPage: state.dialogPage        ///Перерисуй Диалоги когда изменится state.dialogPage  
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

const DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
