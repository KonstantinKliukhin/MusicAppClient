import React, { FC, PropsWithChildren } from 'react';
import { AuthPagesMiddleware } from '../AuthPagesMiddleware/AuthPagesMiddleware';


export const AuthRoot: FC<PropsWithChildren> = props => {
  return (
    <AuthPagesMiddleware>
      {props.children}
    </AuthPagesMiddleware>
  );
};
