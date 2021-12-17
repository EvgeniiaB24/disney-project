import {configureStore} from "@reduxjs/toolkit"
import movieReducer from "./components/movieSlice"

export const store = configureStore({
    reducer:{
        movie:movieReducer,
    },
});