
import getData from "../contants/Constants";

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

    default:
      return state
  }

}

export default rootReducer;
