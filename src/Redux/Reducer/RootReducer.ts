

import { editTableData, getData, getDataForm1 } from "../contants/Constants";

const initialState: any = {
  user: [
    {
      first_name: "ritik",
      last_name: "patidar",
      age: "",
      email: "",
      password: "gfjsdf"
    },
    {
      first_name: "kiran",
      last_name: "",
      age: 33,
      email: "kiran@gmail.com",
      password: ""
    },
    {
      first_name: "pinkesh",
      last_name: "",
      age: "",
      email: "pinkesh@gmail.com",
      password: "sagdsd"
    }]
}

let rootReducer = (state: any = initialState, action: any) => {

  switch (action.type) {
    case getData:
      return {
        ...state,
        user: action.payload

        // user:[...state.user,action.payload]
        // user: [...state.user,action.data]
      }
    case editTableData:
      return {
        user: action.payload

      }
    case getDataForm1:
      return {
        ...state,
        user: action.todo
      }

    default:

      return state
  }

}

export default rootReducer;
