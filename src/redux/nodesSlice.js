import { createSlice } from '@reduxjs/toolkit';

const nodesSlice = createSlice({
	initialState: [],
	name: 'nodes',
	reducers: {
		nodeAdded(state, action) {
			state.push(action.payload);
		},
	},
});

export const { nodeAdded } = nodesSlice.actions;

export default nodesSlice.reducer;
