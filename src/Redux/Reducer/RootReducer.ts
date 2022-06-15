

import { editTableData,  getData, getDataForm1} from "../contants/Constants";

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
    case getDataForm1:
      return{
        ...state,
        user:action.todo
      }
    
    default:
      
      return state
  }

}

export default rootReducer;
