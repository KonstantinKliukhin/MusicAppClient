import React, { FC, PropsWithChildren } from 'react';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';

type PropsType = PropsWithChildren & { session: Session };

const AuthSessionProvider: FC<PropsType> = (props) => {
  return <SessionProvider session={props.session}>{props.children}</SessionProvider>;
};

export default AuthSessionProvider;
