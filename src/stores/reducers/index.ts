import { combineReducers } from '@reduxjs/toolkit';
import mainSlice from '@/stores/reducers/mainSlice';

const rootReducer = combineReducers({
  mainStore: mainSlice.reducer,
});
export default rootReducer;
