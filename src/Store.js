import {configureStore} from "@reduxjs/toolkit"
import movieReducer from "./components/movieSlice"
import userSlice from "./components/userSlice"

export const store = configureStore({
    reducer:{
        movie:movieReducer,
        user:userSlice
    },
});