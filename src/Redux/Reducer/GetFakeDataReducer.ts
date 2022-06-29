import { getFakeDataContants } from "../contants/Constants"

const initialState: any = {
    userData: []
}


let GetFakeDataReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case getFakeDataContants:
            return {
                ...state,
                userData: action.payload
            }
    }
    return state
}
export default GetFakeDataReducer