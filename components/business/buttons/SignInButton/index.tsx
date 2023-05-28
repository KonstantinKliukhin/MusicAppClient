'use client';

import React, { FC } from 'react';
import PinkButton from '@uiComponents/buttons/PinkButton';
import { signIn, useSession } from 'next-auth/react';

const SignInButton: FC = () => {
  const session = useSession();

  if (session.status === 'authenticated') return null;
  return <PinkButton onClick={() => signIn()}>Sign in</PinkButton>;
};

export default SignInButton;
