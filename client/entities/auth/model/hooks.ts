'use client';
import { useSession } from 'next-auth/react';

export const useIsAuthenticated = () => useSession().status === 'authenticated';
export const useIsSessionLoading = () => useSession().status === 'loading';
export const useIsUnauthenticated = () => useSession().status === 'unauthenticated';
