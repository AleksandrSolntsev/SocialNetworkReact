import Dialogs from "./Dialogs"
import {sendMessageCreator} from "../../redux/dialogs-reducer"
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


let mapStateToProps = (state) => {
  return {
  dialogPage: state.dialogPage,        ///Перерисуй Диалоги когда изменится state.dialogPage 
  
  
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
   
  sendMessage: (newMessageBody) =>{
    dispatch(sendMessageCreator(newMessageBody))
  }
}
}
export default compose(
  connect (mapStateToProps, mapDispatchToProps),
  withAuthRedirect
  )
  (Dialogs);

// let authRedirectComponent = withAuthRedirect (Dialogs);
// const DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(authRedirectComponent);

// export default dDialogsContainer;
