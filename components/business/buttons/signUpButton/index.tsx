'use client';
import React, { FC } from 'react';
import PinkButton from '@uiComponents/buttons/PinkButton';
import { useSession } from 'next-auth/react';
import { ROUTES } from '../../../../routes';
import Link from 'next/link';

const SignUpButton: FC = () => {
  const session = useSession();

  if (session.status === 'authenticated') return null;
  return (
    <Link href={ROUTES.SIGN_UP}>
      <PinkButton>Sign up</PinkButton>
    </Link>
  );
};

export default SignUpButton;
