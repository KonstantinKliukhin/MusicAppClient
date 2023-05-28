import React, { FC, PropsWithChildren } from 'react';
import Container from '@uiComponents/Containers/Container';
import RedirectIfSignedMiddleware from '@bzComponents/RedirectIfSignedMiddleware';

const AuthLayout: FC<PropsWithChildren> = (props) => {
  return (
    <RedirectIfSignedMiddleware>
      <Container>{props.children}</Container>
    </RedirectIfSignedMiddleware>
  );
};

export default AuthLayout;
