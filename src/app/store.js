import { configureStore } from "@reduxjs/toolkit";
//import rootReducer from "./reducers";
import rootReducer from '../features/Photo/photoSlice'

const store = configureStore({
    reducer:rootReducer
})

export default store;