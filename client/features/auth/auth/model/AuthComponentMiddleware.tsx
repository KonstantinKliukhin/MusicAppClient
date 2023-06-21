'use client';
import { FC, PropsWithChildren } from 'react';
import { useIsAuthenticated } from '@entities/auth';

export const AuthComponentMiddleware: FC<PropsWithChildren> = (props) => {
  const isAuth = useIsAuthenticated();

  if (!isAuth) return null;

  return <>{props.children}</>;
};
