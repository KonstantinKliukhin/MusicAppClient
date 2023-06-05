'use client';
import { useSession } from 'next-auth/react';

export const useIsAuthenticated = () => useSession().status === 'authenticated';