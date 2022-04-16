
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
 }

const dialogsReducer = (state = initialState, action) => {
  let stateCopy={...state};
  //stateCopy.messagesData=[...state.messagesData];
  switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
              ...state,
              messagesData: [ ...state.messagesData, {id: 4, message : body} ] 
            }
        
        default:
            return state;

    }
    }
  
///Create action SendMessage containers
export const sendMessageCreator = (newMessageBody) =>{
    return {type : SEND_MESSAGE, newMessageBody}
  }
  
export default dialogsReducer;