'use client';

import { useUnit } from 'effector-react';
import { tracksDeleteOneEffect } from '@entities/track';
import { useRefreshWrapper } from '@shared/lib';

export const useDeleteTrack = () => {
  const deleteTrack = useUnit(tracksDeleteOneEffect);

  return useRefreshWrapper(deleteTrack);
};
