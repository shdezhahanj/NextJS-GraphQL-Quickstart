'use client';

import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import { store } from '@/stores/store';

interface IProvider {
  children: ReactNode;
}

export function ReduxProvider({ children }: IProvider) {
  return <Provider store={store}>{children}</Provider>;
}
