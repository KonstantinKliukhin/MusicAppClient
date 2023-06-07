'use client';
import { combine, createEvent } from 'effector/compat';
import { $activeTrack, $tracksQueue, Track } from '@entities/track';
import { findIndexById } from '@shared/lib';

export const playNextTrackEvent = createEvent();
export const playPrevTrackEvent = createEvent();

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
