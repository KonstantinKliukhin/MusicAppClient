'use client';
import React, { FC, PropsWithChildren, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useIsAuthenticated } from '../../../../entities/auth';

export const AuthPagesMiddleware: FC<PropsWithChildren> = props => {
  const isAuthenticated = useIsAuthenticated();

  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) router.push('/tracks');
  }, []);

  return <>{props.children}</>;
};
