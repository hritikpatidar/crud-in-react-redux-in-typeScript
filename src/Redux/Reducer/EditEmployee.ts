
import {  EditEmp } from '../contants/Constants'

const initialState:any = {
    userData:[]
}

let EditEmployee=(state:any=initialState, action:any)=>{
  switch(action.type){
      case EditEmp:
        return{
            ...state,
            userData:action.payload
        }
  }
  return state
}

export default EditEmployee