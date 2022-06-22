
import { addEmployees } from '../contants/Constants'

const initialState:any = {
    userData:{}
}

let AddEmployeesReducer=(state:any=initialState, action:any)=>{
  switch(action.type){
      case addEmployees:
        return{
            ...state,
            userData:action.payload
        }
  }
  return state
}

export default AddEmployeesReducer
