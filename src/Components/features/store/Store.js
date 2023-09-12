import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slice/UserSlice";

const MyStore = configureStore({
    reducer: {
        loginSlice : authSlice
    }, 
    middleware: (getDefaultMiddleware)=> {
        return getDefaultMiddleware ({
            serializableCheck: false,
        })
    }
});

export default MyStore;