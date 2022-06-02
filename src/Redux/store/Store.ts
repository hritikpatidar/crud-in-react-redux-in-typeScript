import { legacy_createStore } from "@reduxjs/toolkit";
import rootReducer from "../Reducer/RootReducer";


const store = legacy_createStore(rootReducer);
console.log("initialState",store.getState());
store.subscribe(()=>{console.log("updateState",store.getState())});

export default store;