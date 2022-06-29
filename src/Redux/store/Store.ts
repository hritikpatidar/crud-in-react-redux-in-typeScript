import { applyMiddleware, combineReducers, legacy_createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import ChangeProfileReducer from "../Reducer/ChangeProfileReducer";
import deleteEmployee from "../Reducer/DeleteEmployee";
import EditEmployee from "../Reducer/EditEmployee";
import GetEmpReducer from "../Reducer/GetEmpReducer";
import GetFakeDataReducer from "../Reducer/GetFakeDataReducer";
import GetRegisterUserReducer from "../Reducer/GetRegisterUserReducer";
import LoginReducer from "../Reducer/LoginReducer";
import RegisterReducer from "../Reducer/RootReducer";
import UserRegisterReducer from "../Reducer/UserRegisterreducer";


let rootReducer = combineReducers({
    register : RegisterReducer,
    login : LoginReducer,
    getEmpData:GetEmpReducer,
    editEmployee :EditEmployee,
    dltEmployee:deleteEmployee,
    userRegister:UserRegisterReducer,
    changeuserProfile:ChangeProfileReducer,
    GetRegisterUser: GetRegisterUserReducer,
    fakeData :GetFakeDataReducer
})

const store = legacy_createStore(rootReducer,applyMiddleware(thunk));
//console.log("initialState",store.getState());
store.subscribe(()=>{console.log("updateState",store.getState())});
export default store;