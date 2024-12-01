import { ReduxProvider } from '@/providers/ReduxProvider';
import type { PropsWithChildren } from 'react';
import { ApolloWrapper } from './apollo-wrapper';

export const Providers = ({ children }: PropsWithChildren) => {
	return (
		<ReduxProvider>
			<ApolloWrapper>{children}</ApolloWrapper>
		</ReduxProvider>
	);
};
