
import { registerUser } from '../contants/Constants'

const initialState:any = {
    userData:[]
}

let GetRegisterUserReducer=(state:any=initialState, action:any)=>{
  switch(action.type){
      case registerUser:
        return{
            ...state,
            userData:action.payload.data
        }
  }
  return state
}

export default GetRegisterUserReducer
