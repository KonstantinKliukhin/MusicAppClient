import React, { FC, PropsWithChildren } from 'react';
import Container from '../../src/shared/ui/Containers/Container';
import RedirectIfSignedMiddleware from '../../components/business/RedirectIfSignedMiddleware';

const AuthLayout: FC<PropsWithChildren> = (props) => {
  return (
    <RedirectIfSignedMiddleware>
      <Container>{props.children}</Container>
    </RedirectIfSignedMiddleware>
  );
};

export default AuthLayout;
