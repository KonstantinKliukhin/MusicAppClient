"use client"

import { Track } from '../../track';
import { useStoreMap } from 'effector-react';
import { $activeTrack } from './player';

export const useIsCurrentTrack = (id?: Track['id']) =>
  useStoreMap($activeTrack, (track) => (track ? track.id === id : false));