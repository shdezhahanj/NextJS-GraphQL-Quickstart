import { PropsWithChildren } from 'react';
import { ApolloWrapper } from './apollo-wrapper';
import { ReduxProvider } from '@/providers/ReduxProvider';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ReduxProvider>
      <ApolloWrapper>{children}</ApolloWrapper>
    </ReduxProvider>
  );
};
