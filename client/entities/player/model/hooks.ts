'use client';

import { useStoreMap } from 'effector-react';
import { $activeTrack } from './player';

export const useIsCurrentTrack = (id?: ID) =>
  useStoreMap($activeTrack, (track) => (track ? track.id === id : false));
