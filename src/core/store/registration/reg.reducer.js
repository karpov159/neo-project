import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { registration } from './reg.action';

const registrationAdapter = createEntityAdapter();

const initialState = registrationAdapter.getInitialState({
	registrationLoadingStatus: 'idle',
});

const registrationSlice = createSlice({
	name: 'registration',
	initialState,
	reducers: {
		clearLoadingStatus: (state) => {
			state.registrationLoadingStatus = 'idle';
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(registration.pending, (state) => {
				state.registrationLoadingStatus = 'loading';
			})
			.addCase(registration.fulfilled, (state) => {
				state.registrationLoadingStatus = 'idle';
			})
			.addCase(registration.rejected, (state) => {
				state.registrationLoadingStatus = 'error';
			})
			.addDefaultCase(() => {});
	},
});

const { reducer, actions } = registrationSlice;

export const { clearLoadingStatus } = actions;

export default reducer;
