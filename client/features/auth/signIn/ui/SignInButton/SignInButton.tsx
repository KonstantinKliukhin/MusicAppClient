'use client';
import { signIn } from 'next-auth/react';
import React, { FC } from 'react';
import { useIsUnauthenticated } from '@entities/auth';
import { PinkButton } from '@shared/ui';

export const SignInButton: FC = () => {
  const isUnauthenticated = useIsUnauthenticated();

  if (isUnauthenticated) return <PinkButton onClick={() => signIn()}>Sign In</PinkButton>;

  return null;
};

export default SignInButton;
