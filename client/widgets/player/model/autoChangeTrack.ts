'use client';
import { sample } from 'effector/compat';
import { useEffect } from 'react';
import {
  $nextTrack,
  $prevTrack,
  playNextTrackEvent,
  playPrevTrackEvent,
} from '@features/changeActiveTrack';
import { trackEndedEvent } from '@features/trackProgress';
import { $isActiveTrackInTracksQueue, setActiveTrackEvent } from '@entities/track';

function trackAutoChange() {
  sample({
    clock: [trackEndedEvent, playNextTrackEvent],
    source: { nextTrack: $nextTrack, isActiveTrackInTracksQueue: $isActiveTrackInTracksQueue },
    filter: ({ isActiveTrackInTracksQueue }) => isActiveTrackInTracksQueue,
    fn: ({ nextTrack }) => nextTrack,
    target: setActiveTrackEvent,
  });

  sample({
    clock: playPrevTrackEvent,
    source: { prevTrack: $prevTrack, isActiveTrackInTracksQueue: $isActiveTrackInTracksQueue },
    filter: ({ isActiveTrackInTracksQueue }) => isActiveTrackInTracksQueue,
    fn: ({ prevTrack }) => prevTrack,
    target: setActiveTrackEvent,
  });
}

export const useTrackAutoChange = () => useEffect(trackAutoChange, []);
