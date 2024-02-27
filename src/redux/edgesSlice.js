import { createSlice } from '@reduxjs/toolkit';

const edgesSlice = createSlice({
	initialState: [],
	name: 'edges',
	reducers: {
		edgesAdded(state, action) {
			state.push(action.payload);
		},
	},
});

export const { edgesAdded } = edgesSlice.actions;

export default edgesSlice.reducer;
