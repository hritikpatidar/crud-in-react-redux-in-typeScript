import React from 'react'
import { getUserRegister, login_api } from '../contants/Constants'

const initialState:any = {
    userData:{}
}

let UserRegisterReducer=(state:any=initialState, action:any)=>{
  switch(action.type){
      case getUserRegister:
        return{
            ...state,
            userData:action.payload
        }
  }
  return state
}

export default UserRegisterReducer
