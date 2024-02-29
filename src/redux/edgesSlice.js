import { createSlice } from '@reduxjs/toolkit';

const edgesSlice = createSlice({
	initialState: [],
	name: 'edges',
	reducers: {
		edgesAdded(state, action) {
			state.push(action.payload);
		},
		edgesDeleted(state, action) {
			const { id } = action.payload;
			return state.filter((edge) => edge.id !== id);
		},
	},
});

export const { edgesAdded, edgesDeleted } = edgesSlice.actions;

export default edgesSlice.reducer;
