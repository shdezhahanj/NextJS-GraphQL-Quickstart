import { configureStore, type AnyAction, type Reducer } from '@reduxjs/toolkit';
import rootReducer from '@/stores/reducers';

export type RootState = ReturnType<typeof rootReducer>;

const reducer: Reducer<RootState, AnyAction> = (state, action) => {
  if (action.type === 'auth/logout') {
    return rootReducer(undefined, action);
  }
  return rootReducer(state, action);
};

export const store = configureStore({
  reducer,
});

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type RequestState = 'idle' | 'loading' | 'failed';
