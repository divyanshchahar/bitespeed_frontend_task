import { createSlice } from '@reduxjs/toolkit';
import { applyNodeChanges } from 'reactflow';

const nodesSlice = createSlice({
	initialState: [],
	name: 'nodes',
	reducers: {
		nodeAdded(state, action) {
			state.push(action.payload);
		},
		nodeUpdated(state, action) {
			return applyNodeChanges(action.payload, state);
		},
	},
});

export const { nodeAdded, nodeUpdated } = nodesSlice.actions;

export default nodesSlice.reducer;
