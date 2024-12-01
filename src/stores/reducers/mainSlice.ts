import type { AppState } from '@/stores/store';
import { createSelector, createSlice } from '@reduxjs/toolkit';

type MainState = {
	sentences?: string[];
};

const initialState: MainState = {
	sentences: undefined,
};

const mainSlice = createSlice({
	name: 'mainSlice',
	initialState,
	reducers: {
		changeTopClassLiteralDomains: (state, action) => {
			state.sentences = action.payload;
		},
	},
});
const selectMainSlice = (state: AppState) => state.mainStore;

const selectSentences = createSelector(
	selectMainSlice,
	(state: MainState) => state.sentences,
);

export const { changeTopClassLiteralDomains } = mainSlice.actions;

export default mainSlice;

export type { MainState };

export { selectSentences };
