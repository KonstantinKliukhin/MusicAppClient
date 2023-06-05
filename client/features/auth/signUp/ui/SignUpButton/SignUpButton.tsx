'use client';
import React, { FC } from 'react';
import Link from 'next/link';
import { ROUTES } from '../../../../../../routes';
import { PinkButton } from '../../../../../shared/ui';
import { useIsAuthenticated } from '../../../../../entities/auth';

export const SignUpButton: FC = () => {
  const isAuthenticated = useIsAuthenticated();

  if (isAuthenticated) return null;

  return (
    <Link href={ROUTES.SIGN_UP}>
      <PinkButton>Sign up</PinkButton>
    </Link>
  );
};