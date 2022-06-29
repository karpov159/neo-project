import { configureStore } from "@reduxjs/toolkit";
import claims from '../components/claims-list/ClaimsSlice';
import registration  from "../components/registration/RegistrationSlice";
import auth from '../components/login/LoginSlice';

const store = configureStore({
    reducer: {claims, registration, auth},
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;