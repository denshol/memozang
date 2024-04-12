import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "../user/userSlice";


const rootReducer = combineReducers({
    user:userSlice,
})

const store = configureStore({
    reducer:rootReducer,
})

export default store;