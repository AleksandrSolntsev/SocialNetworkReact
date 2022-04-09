const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {  
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

const dialogsReducer = (state = initialState, action) => {
  let stateCopy={...state};
  //stateCopy.messagesData=[...state.messagesData];
  switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:{
            
            stateCopy.newMessageBody = action.body;
            return stateCopy;}
        case SEND_MESSAGE:{
            let body = state.newMessageBody;
            stateCopy.messagesData.push ({ id: 4, message : body });
            stateCopy.newMessageBody = '';
            return stateCopy;}
        default:
            return state;

    }
    }
  
///Create action SendMessage containers
export const sendMessageCreator = () =>{
    return {type : SEND_MESSAGE}
  }
export const updateNewMessageBodyCreator = (body) =>{
    return {type : UPDATE_NEW_MESSAGE_BODY, body : body}
  }
  
export default dialogsReducer;