'use client';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

export function useRefreshWrapper<PromiseData, PromiseArgs extends any[]>(
  callBack: (...args: PromiseArgs) => Promise<PromiseData>,
) {
  const router = useRouter();

  return useCallback(
    async (...args: PromiseArgs): Promise<PromiseData> => {
      const res = await callBack(...args);
      router.refresh();
      return res;
    },
    [callBack],
  );
}
