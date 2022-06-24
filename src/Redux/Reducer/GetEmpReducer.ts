
import { empData } from '../contants/Constants'

const initialState:any = {
    userData:[]
}

let GetEmpReducer=(state:any=initialState, action:any)=>{
  switch(action.type){
      case empData:
        return{
            ...state,
            userData:action.payload.data
        }
  }
  return state
}

export default GetEmpReducer
