import { configureStore } from "@reduxjs/toolkit";
import claims from './ClaimsSlice';
import registration  from "./RegistrationSlice";
import auth from './LoginSlice';
import menu from "./MenuSlice";

const store = configureStore({
    reducer: {claims, registration, auth, menu},
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;