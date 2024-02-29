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
		textUpdated(state, action) {
			const { id, data } = action.payload;
			return state.map((node) => {
				if (node.id === id) {
					return { ...node, data: data };
				}
				return node;
			});
		},
	},
});

export const { nodeAdded, nodeUpdated, textUpdated } = nodesSlice.actions;

export default nodesSlice.reducer;
