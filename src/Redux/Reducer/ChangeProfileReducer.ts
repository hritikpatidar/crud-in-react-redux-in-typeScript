import { ChangeProfilePic } from "../contants/Constants"


const initialState:any = {
    userData:[]
}

let ChangeProfileReducer=(state:any=initialState,action:any)=>{
    switch(action.type){
        case ChangeProfilePic:
          return{
              ...state,
              userData:action.payload
          }
    }

    return state
}

export default ChangeProfileReducer