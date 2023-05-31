'use client';

import { FC, PropsWithChildren } from 'react';
import ReduxProvider from '../providers/ReduxProvider';
import ReactQueryProvider from '../providers/ReactQueryProvider';
import AuthSessionProvider from '../providers/AuthSessionProvider';
import { Session } from 'next-auth';

type PropsType = PropsWithChildren & { session: Session };

const Providers: FC<PropsType> = (props) => (
  <AuthSessionProvider session={props.session}>
    <ReactQueryProvider>
      <ReduxProvider>{props.children}</ReduxProvider>
    </ReactQueryProvider>
  </AuthSessionProvider>
);

export default Providers;
