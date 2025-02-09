import { ReduxProvider } from '@/providers/ReduxProvider';
import type { PropsWithChildren } from 'react';

export const Providers = ({ children }: PropsWithChildren) => {
	return (
		<ReduxProvider>
			{children}
		</ReduxProvider>
	);
};
