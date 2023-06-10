'use client';
import Link from 'next/link';
import React, { FC } from 'react';
import { useIsUnauthenticated } from '@entities/auth';
import { ROUTES } from '@shared/config/routes';
import { PinkButton } from '@shared/ui';

export const SignUpButton: FC = () => {
  const isUnauthenticated = useIsUnauthenticated();

  if (isUnauthenticated)
    return (
      <Link href={ROUTES.SIGN_UP}>
        <PinkButton>Sign up</PinkButton>
      </Link>
    );

  return null;
};
