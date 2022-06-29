import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import useHttp from "../../hooks/http.hook";
import { _apiBase } from "../../helpers/constants";

const registrationAdapter = createEntityAdapter();

const initialState = registrationAdapter.getInitialState({
    registrationLoadingStatus: 'idle',
});

export const registration = createAsyncThunk(
    'registration/userRegistration',
    async (body) => {
        const {request} = useHttp();
        const res = await request(
            `${_apiBase}/auth/registration`, 
            'POST', 
            JSON.stringify(body), 
            {'Content-Type': 'application/json;charset=utf-8'})
            
        return await res;
    }
)

const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        clearLoadingStatus: state => {state.registrationLoadingStatus = 'idle'},
    },
    extraReducers: (builder) => {
        builder
            .addCase(registration.pending, state => {state.registrationLoadingStatus = 'loading'})
            .addCase(registration.fulfilled, state => {state.registrationLoadingStatus = 'idle'})
            .addCase(registration.rejected, state => {state.registrationLoadingStatus = 'error'})
            .addDefaultCase(() => {})
    }
})

const {reducer, actions} = registrationSlice;

export const {clearLoadingStatus} = actions;

export default reducer;