import mainSlice from '@/stores/reducers/mainSlice';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
	mainStore: mainSlice.reducer,
});
export default rootReducer;
