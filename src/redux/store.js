import { configureStore } from '@reduxjs/toolkit';
import edgesReducer from './edgesSlice';

export default configureStore({
	reducer: {
		edges: edgesReducer,
	},
});
