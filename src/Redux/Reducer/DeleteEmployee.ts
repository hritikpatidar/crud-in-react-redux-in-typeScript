
import {  DeleteEmp } from '../contants/Constants'

const initialState:any = {
    userData:[]
}

let deleteEmployee=(state:any=initialState, action:any)=>{
  switch(action.type){
      case DeleteEmp:
        return{
            ...state,
            userData:action.payload
        }
  }
  return state
}

export default deleteEmployee