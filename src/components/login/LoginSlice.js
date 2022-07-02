import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import useHttp from "../../hooks/http.hook";
import { _apiBase } from "../../helpers/constants";

const loginAdapter = createEntityAdapter();

const initialState = loginAdapter.getInitialState({
    authLoadingStatus: 'idle',
    isLoggedIn: true
});

export const auth = createAsyncThunk(
    'auth/userAuthorization',
    async (body) => {
        const {request} = useHttp();
        const res = await request(
            `${_apiBase}/auth/login`, 
            'POST', 
            JSON.stringify(body), 
            {'Content-Type': 'application/json;charset=utf-8'}
        )
    
        localStorage.setItem("Token", res.token);
        localStorage.setItem('User', 
            JSON.stringify({
                'fullName': res.fullName,
                'role': res.role.slug
            }));
            
        return await res;
    }
)

const loginSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        clearLoadingStatus: state => {state.authLoadingStatus = 'idle'},
        setLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(auth.pending, state => {state.authLoadingStatus = 'loading'})
            .addCase(auth.fulfilled, state => {state.authLoadingStatus = 'idle'})
            .addCase(auth.rejected, state => {state.authLoadingStatus = 'error'})
            .addDefaultCase(() => {})
    }
})

const {reducer, actions} = loginSlice;

export const {clearLoadingStatus, setLoggedIn} = actions;

export default reducer;