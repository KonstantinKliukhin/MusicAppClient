import { Session } from 'next-auth';
import React, { PropsWithChildren } from 'react';
import { BaseLayout } from '@app/layouts';
import { AuthProvider } from '@widgets/auth';

type PropsType = PropsWithChildren & {
  session: Session;
};

export function AppRoot(props: PropsType) {
  return (
    <AuthProvider session={props.session}>
      <BaseLayout>{props.children}</BaseLayout>
    </AuthProvider>
  );
}
