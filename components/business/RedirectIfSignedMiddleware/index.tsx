'use client';

import React, { FC, PropsWithChildren, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const RedirectIfSignedMiddleware: FC<PropsWithChildren> = (props) => {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status === 'authenticated') {
      router.push('/tracks');
    }
  }, []);

  return <>{props.children}</>;
};

export default RedirectIfSignedMiddleware;
