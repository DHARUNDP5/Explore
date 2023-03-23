import { configureStore } from "@reduxjs/toolkit";
import returndata from "../signupSlice";

const store = configureStore({
    reducer: { 
        sigupd: returndata 
    },
});
export default store;