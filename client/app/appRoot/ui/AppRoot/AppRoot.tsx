import { Session } from 'next-auth';
import React, { PropsWithChildren } from 'react';
import { AuthProvider } from '../../../auth';
import { BaseLayout } from '../../../layouts';

type PropsType = PropsWithChildren & {
  session: Session;
};

export function AppRoot(props: PropsType) {
  console.log(props.session);
  return (
    <AuthProvider session={props.session}>
      <BaseLayout>
        {props.children}
      </BaseLayout>
    </AuthProvider>
  );
};
