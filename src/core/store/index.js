import { configureStore } from "@reduxjs/toolkit";
import claims from './claim/claim.reducer';
import registration  from "./registration/reg.reducer";
import auth from './login/login.reducer';
import menu from "./menu/menu.reducer";

const store = configureStore({
    reducer: {claims, registration, auth, menu},
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;