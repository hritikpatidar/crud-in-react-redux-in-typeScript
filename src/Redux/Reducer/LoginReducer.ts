import React from 'react'
import { login_api } from '../contants/Constants'

const initialState:any = {
    userData:[]
}

let LoginReducer=(state:any=initialState, action:any)=>{
  switch(action.type){
      case login_api:
        return{
            ...state,
            userData:action.payload
        }
  }
  return state
}

export default LoginReducer
