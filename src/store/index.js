import { configureStore } from "@reduxjs/toolkit";
import claims from '../components/claims-list/ClaimsSlice';
import registration  from "../components/registration/RegistrationSlice";
import auth from '../components/login/LoginSlice';
import menu from "../components/menu/MenuSlice";

const store = configureStore({
    reducer: {claims, registration, auth, menu},
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;