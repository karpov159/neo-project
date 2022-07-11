import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { auth } from './login.action';

const loginAdapter = createEntityAdapter();

const initialState = loginAdapter.getInitialState({
	authLoadingStatus: 'idle',
	isLoggedIn: false,
});

const loginSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		clearLoadingStatus: (state) => {
			state.authLoadingStatus = 'idle';
		},
		setLoggedIn: (state, action) => {
			state.isLoggedIn = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(auth.pending, (state) => {
				state.authLoadingStatus = 'loading';
			})
			.addCase(auth.fulfilled, (state) => {
				state.authLoadingStatus = 'idle';
			})
			.addCase(auth.rejected, (state) => {
				state.authLoadingStatus = 'error';
			})
			.addDefaultCase(() => {});
	},
});

const { reducer, actions } = loginSlice;

export const { clearLoadingStatus, setLoggedIn } = actions;

export default reducer;
