'use client';

import { combine, createEvent, createStore } from 'effector/compat';
import { useStoreMap } from 'effector-react';
import { findById } from '@shared/lib';
import { Track } from './types/Track';

export const setActiveTrackEvent = createEvent<Track | null>();
export const tracksQueueSetQueueEvent = createEvent<Track[]>();
export const tracksQueueSetNextEvent = createEvent<Track>();

export const $tracksQueue = createStore<Track[]>([])
  .on(tracksQueueSetQueueEvent, (state, tracks) => tracks)
  .on(tracksQueueSetNextEvent, (state, track) => [track, ...state]);

export const $activeTrack = createStore<null | Track>(null).on(
  setActiveTrackEvent,
  (_, track) => track,
);

export const useIsCurrentTrack = (id?: ID) =>
  useStoreMap($activeTrack, (track) => (track ? track.id === id : false));

export const $activeTrackExist = $activeTrack.map((track) => Boolean(track));
export const $isActiveTrackInTracksQueue = combine(
  [$tracksQueue, $activeTrack],
  ([tracksQueue, activeTrack]) => {
    if (!activeTrack) return false;
    return Boolean(findById(tracksQueue, activeTrack));
  },
);
