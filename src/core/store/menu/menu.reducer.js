import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	openedHamburger: false,
};

const menuSlice = createSlice({
	name: 'menu',
	initialState,
	reducers: {
		setOpenedHamburger: (state, action) => {
			state.openedHamburger = action.payload;
		},
	},
});

const { reducer, actions } = menuSlice;

export default reducer;

export const { setOpenedHamburger } = actions;
