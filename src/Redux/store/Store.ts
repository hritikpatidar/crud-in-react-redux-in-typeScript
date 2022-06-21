import { applyMiddleware, combineReducers, legacy_createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import LoginReducer from "../Reducer/LoginReducer";
import RegisterReducer from "../Reducer/RootReducer";


let rootReducer = combineReducers({
    register : RegisterReducer,
    login : LoginReducer,
})

const store = legacy_createStore(rootReducer,applyMiddleware(thunk));
//console.log("initialState",store.getState());
store.subscribe(()=>{console.log("updateState",store.getState())});
export default store;