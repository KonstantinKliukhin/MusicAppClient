'use client';
import { signIn } from 'next-auth/react';
import React, { FC } from 'react';
import { useIsAuthenticated } from '../../../../../entities/auth';
import { PinkButton } from '../../../../../shared/ui';

export const SignInButton: FC = () => {
  const isAuthenticated = useIsAuthenticated();

  if (isAuthenticated) return null;

  return (
    <PinkButton onClick={() => signIn()}>
      Sign In
    </PinkButton>
  );
};

export default SignInButton;