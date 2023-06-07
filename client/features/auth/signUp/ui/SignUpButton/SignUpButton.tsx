'use client';
import Link from 'next/link';
import React, { FC } from 'react';
import { ROUTES } from '@shared/config/routes';
import { useIsAuthenticated } from '../../../../../entities/auth';
import { PinkButton } from '../../../../../shared/ui';

export const SignUpButton: FC = () => {
  const isAuthenticated = useIsAuthenticated();

  if (isAuthenticated) return null;

  return (
    <Link href={ROUTES.SIGN_UP}>
      <PinkButton>Sign up</PinkButton>
    </Link>
  );
};