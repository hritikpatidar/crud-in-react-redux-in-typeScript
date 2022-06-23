import { applyMiddleware, combineReducers, legacy_createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import ChangeProfileReducer from "../Reducer/ChangeProfileReducer";
import deleteEmployee from "../Reducer/DeleteEmployee";
import EditEmployee from "../Reducer/EditEmployee";
import EmpGetData from "../Reducer/EmpGetData";
import GetRegisterUserReducer from "../Reducer/GetRegisterUserReducer";
import LoginReducer from "../Reducer/LoginReducer";
import RegisterReducer from "../Reducer/RootReducer";


let rootReducer = combineReducers({
    register : RegisterReducer,
    login : LoginReducer,
    getEmpData:EmpGetData,
    editEmployee :EditEmployee,
    dltEmployee:deleteEmployee,
    changeuserProfile:ChangeProfileReducer,
    GetRegisterUser: GetRegisterUserReducer
})

const store = legacy_createStore(rootReducer,applyMiddleware(thunk));
//console.log("initialState",store.getState());
store.subscribe(()=>{console.log("updateState",store.getState())});
export default store;