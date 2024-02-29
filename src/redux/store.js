import { configureStore } from '@reduxjs/toolkit';
import edgesReducer from './edgesSlice';
import nodesReducer from './nodesSlice';

export default configureStore({
	reducer: {
		edges: edgesReducer,
		nodes: nodesReducer,
	},
});
