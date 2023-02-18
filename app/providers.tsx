'use client';

import { PropsWithChildren } from 'react';
import ReduxProvider from '../providers/ReduxProvider';
import ReactQueryProvider from '../providers/ReactQueryProvider';

type PropsType = PropsWithChildren;

export default function Providers({ children }: PropsType) {
  return (
    <ReactQueryProvider>
      <ReduxProvider>{children}</ReduxProvider>
    </ReactQueryProvider>
  );
}
