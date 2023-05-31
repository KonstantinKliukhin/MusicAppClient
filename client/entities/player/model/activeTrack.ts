import { createEvent, createStore } from 'effector';
import { Track } from '../../track/model';
import { useStoreMap } from 'effector-react';

export const setActiveTrackEvent = createEvent<Track>();

export const $activeTrack = createStore<null | Track>(null).on(
  setActiveTrackEvent,
  (_, track) => track,
);

export const useIsCurrentTrack = (id: Track['id']) =>
  useStoreMap($activeTrack, (track) => (track ? track.id === id : null));
