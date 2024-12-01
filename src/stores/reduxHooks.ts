import type { AppDispatch, AppState } from '@/stores/store';
import {
	type TypedUseSelectorHook,
	useDispatch,
	useSelector,
} from 'react-redux';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
