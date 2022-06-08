

import { editTableData, getData} from "../contants/Constants";

const initialState: any = {
  user: []
}

let rootReducer = (state:any =initialState , action: any) => {
  
  switch (action.type) {
    case getData:
      return {
        ...state,
        user:action.payload
        
        // user:[...state.user,action.payload]
        // user: [...state.user,action.data]
      }
    case editTableData:
      return {
        user:action.payload
        
      }
   
      

    default:
      
      return state
  }

}

export default rootReducer;
