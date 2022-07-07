import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import useHttp from "../helpers/http.hook";
import modifyData from "../helpers/modifyData";

import { BASE_URL } from "../helpers/constants";
import getUserToken from '../helpers/getUserToken';

const claimsAdapter = createEntityAdapter({
    selectId: (claim) => {
        return claim._id
    }
});

const initialState = claimsAdapter.getInitialState({
    claimsLoadingStatus: 'idle',
    currentPage: 1,
    searchInput: '',
    columnSort: 'title',
    orderSort: 'desc',
    browseAccessError: false,
    newClaimAccesError: false,
});

export const fetchClaims = createAsyncThunk(
    'claims/fetchClaims',
    async ({columnSort = 'title', orderSort = 'desc', searchInput = ''}) => {
        const {request} = useHttp();
        const res = await request(
            `${BASE_URL}/claim?offset=0&search=${searchInput}&column=${columnSort}&sort=${orderSort}`, 
            'GET', 
            null, 
            {'Authorization': `Bearer ${getUserToken()}`,
            'Content-Type': 'application/json'});
        return res.claims;
    }
)

export const getClaim = createAsyncThunk(
    'claims/getClaim',
    async (id) => {
        const {request} = useHttp();
        const res = await request(
            `${BASE_URL}/claim/${id}`, 
            'GET', 
            null,
            {'Authorization': `Bearer ${getUserToken()}`,
            'Content-Type': 'application/json'});
        return modifyData(res);
    }
)

export const createNewClaim = createAsyncThunk(
    'claims/createNewClaim',
    async (body) => {
        const {request} = useHttp();
        const res = await request(
            `${BASE_URL}/claim`, 
            'POST', 
            JSON.stringify(body), 
            {'Authorization': `Bearer ${getUserToken()}`,
            'Content-Type': 'application/json'})
        return modifyData(res);
    }
)

export const updateClaim = createAsyncThunk(
    'claims/updateClaim',
    async ({claimId, body}) => {
        const {request} = useHttp();
        const res = await request(
            `${BASE_URL}/claim/${claimId}`,
            'PUT',
            JSON.stringify(body),
            {'Authorization':
            `Bearer ${getUserToken()}`,
            'Content-Type': 'application/json'});

        return res;
    }
)


const claimsSlice = createSlice({
    name: 'claims',
    initialState,
    reducers: {
        changePage: (state, action) => {
            state.currentPage = action.payload;
        },
        changeSearchInput: (state, action) => {
            state.searchInput = action.payload;
        },
        changeColumnSort: (state, action) => {
            state.columnSort = action.payload;
        },
        changeOrderSort: (state, action) => {
            state.orderSort = action.payload;
        },
        setBrowseAccessError: (state, action) => {
            state.browseAccessError = action.payload;
        },
        setNewClaimAccesError: (state, action) => {
            state.newClaimAccesError = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchClaims.pending, state => {state.claimsLoadingStatus = 'loading'})
            .addCase(fetchClaims.fulfilled, (state, action) => {
                claimsAdapter.setAll(state, action.payload);
                state.claimsLoadingStatus = 'idle'
            })
            .addCase(fetchClaims.rejected, state => {state.claimsLoadingStatus = 'error'})
            .addDefaultCase(() => {});
    }
})


const {reducer, actions} = claimsSlice;

export default reducer;

export const {selectAll} = claimsAdapter.getSelectors(state => state.claims)

export const { 
    changePage, 
    changeSearchInput, 
    changeColumnSort, 
    changeOrderSort,
    setBrowseAccessError,
    setNewClaimAccesError
} 
    = actions;