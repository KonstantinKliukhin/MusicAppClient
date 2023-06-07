'use client';

import { combine, createEvent, createStore, sample } from 'effector/compat';
import { findById, findIndexById } from '@shared/lib';
import { Track } from '../../track';

export const setActiveTrackEvent = createEvent<Track | null>();
export const setVolumeActionEvent = createEvent<number>();
export const durationSetEvent = createEvent<number>();
export const clearDurationEvent = createEvent<number>();
export const pauseEvent = createEvent();
export const playEvent = createEvent();
export const togglePlayerEvent = createEvent();
export const playNextTrackEvent = createEvent();
export const playPrevTrackEvent = createEvent();
export const tracksQueueSetQueueEvent = createEvent<Track[]>();
export const tracksQueueSetNextEvent = createEvent<Track>();
export const trackEndedEvent = createEvent();
export const setCurrentTimeEvent = createEvent<number>();
export const currentTimeTickEvent = createEvent<number>();

const $tracksQueue = createStore<Track[]>([])
  .on(tracksQueueSetQueueEvent, (state, tracks) => tracks)
  .on(tracksQueueSetNextEvent, (state, track) => [track, ...state]);

export const $activeTrack = createStore<null | Track>(null).on(
  setActiveTrackEvent,
  (_, track) => track,
);

export const $activeTrackExist = $activeTrack.map((track) => Boolean(track));
export const $isActiveTrackInTracksQueue = combine(
  [$tracksQueue, $activeTrack],
  ([tracksQueue, activeTrack]) => {
    if (!activeTrack) return false;
    return Boolean(findById(tracksQueue, activeTrack));
  },
);

export const $volume = createStore<number>(80).on(setVolumeActionEvent, (_, volume) => volume);

export const $currentTime = createStore<number>(0)
  .on(setCurrentTimeEvent, (_, time) => time)
  .on(currentTimeTickEvent, (_, time) => time);

export const $duration = createStore<number>(0)
  .on(durationSetEvent, (_, duration) => duration)
  .reset(clearDurationEvent);

export const $pause = createStore<boolean>(true)
  .on(playEvent, () => false)
  .on(pauseEvent, () => true)
  .on(togglePlayerEvent, (state) => !state);

export const $prevTrack = combine(
  [$activeTrack, $tracksQueue],
  ([activeTrack, tracksQueue]): Track | null => {
    if (!tracksQueue.length || tracksQueue.length === 1) return null;

    const firstTrackInQueue = tracksQueue[0];

    if (!activeTrack) return firstTrackInQueue;

    const currentTrackIndexInQueue = findIndexById(tracksQueue, activeTrack);
    if (currentTrackIndexInQueue === -1) return firstTrackInQueue;

    const lastTrackInQueue = tracksQueue[tracksQueue.length - 1];

    if (currentTrackIndexInQueue === 0) return lastTrackInQueue;

    return tracksQueue[currentTrackIndexInQueue - 1];
  },
);

export const $nextTrack = combine(
  [$activeTrack, $tracksQueue],
  ([activeTrack, tracksQueue]): Track | null => {
    if (!tracksQueue.length || tracksQueue.length === 1) return null;

    const firstTrackInQueue = tracksQueue[0];

    if (!activeTrack) return firstTrackInQueue;

    const currentTrackIndexInQueue = findIndexById(tracksQueue, activeTrack);

    if (currentTrackIndexInQueue === -1) return firstTrackInQueue;

    if (currentTrackIndexInQueue + 1 === tracksQueue.length) return firstTrackInQueue;

    return tracksQueue[currentTrackIndexInQueue + 1];
  },
);

sample({
  clock: $currentTime,
  source: $duration,
  filter: (duration, currentTime) => currentTime >= duration,
  target: trackEndedEvent,
});

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
