'use client';
import { sample } from 'effector/compat';
import {
  $nextTrack,
  $prevTrack,
  playNextTrackEvent,
  playPrevTrackEvent,
} from '@features/changeActiveTrack';
import { trackEndedEvent } from '@features/trackProgress';
import { $isActiveTrackInTracksQueue, setActiveTrackEvent } from '@entities/track';

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

export const TRACK_AUTO_CHANGE = 'TRACK_AUTO_CHANGE';
