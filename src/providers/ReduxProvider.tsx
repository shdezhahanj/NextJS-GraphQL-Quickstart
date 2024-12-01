'use client';

import { store } from '@/stores/store';
import type { ReactNode } from 'react';
import { Provider } from 'react-redux';

interface IProvider {
	children: ReactNode;
}

export function ReduxProvider({ children }: IProvider) {
	return <Provider store={store}>{children}</Provider>;
}
