'use client';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import React, { FC, PropsWithChildren } from 'react';

type PropsType = PropsWithChildren & { session: Session };

export const AuthProvider: FC<PropsType> = props => {
  return (
    <SessionProvider session={props.session}>
      {props.children}
    </SessionProvider>
  );
};