'use client';
import React, { FC } from 'react';
import { PinkButton } from '../../../../../shared/ui';
import { signIn } from 'next-auth/react';
import { useIsAuthenticated } from '../../../../../entities/auth';

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