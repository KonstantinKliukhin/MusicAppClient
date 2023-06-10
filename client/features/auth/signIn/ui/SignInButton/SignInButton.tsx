'use client';
import { signIn, useSession } from 'next-auth/react';
import React, { FC } from 'react';
import { useIsUnauthenticated } from '@entities/auth';
import { PinkButton } from '@shared/ui';

export const SignInButton: FC = () => {
  const isUnauthenticated = useIsUnauthenticated();
  const session = useSession().data;

  console.log(session);

  if (isUnauthenticated) return <PinkButton onClick={() => signIn()}>Sign In</PinkButton>;

  return null;
};

export default SignInButton;
