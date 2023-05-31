'use client';

import { QueryClient, QueryClientProvider } from 'react-query';
import { FC, PropsWithChildren } from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false },
  },
});

const ReactQueryProvider: FC<PropsWithChildren> = (props) => (
  <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>
);

export default ReactQueryProvider;
