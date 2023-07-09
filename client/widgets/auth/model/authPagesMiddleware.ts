'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useIsAuthenticated } from '@entities/auth';
import { ROUTES } from '@shared/config';

export const useAuthPagesMiddleware = () => {
  const isAuthenticated = useIsAuthenticated();

  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) router.replace(ROUTES.TRACKS_LIST);
  }, []);
};
