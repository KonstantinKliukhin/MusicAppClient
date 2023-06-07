'use client';

import React, { FC, PropsWithChildren } from 'react';
import { useAuthPagesMiddleware } from '../../model';

export const AuthRoot: FC<PropsWithChildren> = (props) => {
  useAuthPagesMiddleware();
  return <>{props.children}</>;
};
