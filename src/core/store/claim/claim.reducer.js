import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { fetchClaims } from "./claim.action";

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

export const {selectAll} = claimsAdapter.getSelectors(state => state.claims);

export const { 
    changePage, 
    changeSearchInput, 
    changeColumnSort, 
    changeOrderSort,
    setBrowseAccessError,
    setNewClaimAccesError
} = actions;