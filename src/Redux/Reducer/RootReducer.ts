

import { editTableData, getData, getDataForm1 } from "../contants/Constants";

const initialState: any = {
  user: []
}

let RegisterReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case getData:
      return {
        ...state,
        user: action.payload
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

export default RegisterReducer;
