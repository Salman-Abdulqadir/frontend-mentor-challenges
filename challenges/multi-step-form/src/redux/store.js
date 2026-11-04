import { configureStore } from "@reduxjs/toolkit";
import infoReducer from "./infoReducer";
export default configureStore({
    reducer:{
        info: infoReducer
    }
})