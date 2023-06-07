'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useIsAuthenticated } from '@entities/auth';

export const useAuthPagesMiddleware = () => {
  const isAuthenticated = useIsAuthenticated();

  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) router.push('/tracks');
  }, []);
};
