'use client';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

export default function useCallbackUrl(): string {
  const params = useSearchParams();

  return useMemo(() => params?.get('callbackUrl') || '/tracks', [params]);
}
