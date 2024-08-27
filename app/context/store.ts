import {configureStore} from "@reduxjs/toolkit"
import {userSigninSlice}  from "./slices/userSignupSlice"
import { loginSlice } from "./slices/loginSlice"
import blogSlice from "./slices/blogSlice"

export const store = configureStore({
    reducer: {
        user: userSigninSlice.reducer,
        login: loginSlice.reducer,
        blog: blogSlice.reducer,
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch