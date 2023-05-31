import { createEffect, createEvent, createStore } from 'effector'
import { Track } from './types'
import { createTrack, CreateTrackDtoType, deleteTrack } from '../api'

// const tracksGetEffect = createEffect(async () => await getTracks());
export const tracksCreateOneEffect = createEffect(
  async (dto: CreateTrackDtoType) => await createTrack(dto),
);

export const tracksDeleteOneEffect = createEffect(async (id: Track['id']) => await deleteTrack(id));
// const tracksDeleteEffect = createEffect(async (id: Track['id']) => await deleteTrack(id));
// const tracksGetOneEffect = createEffect(async (id: Track['id']) => await getOneTrack(id));
// const tracksAddListenEffect = createEffect(async (id: Track['id']) => await addTrackListen(id));

export const tracksSetEvent = createEvent<Track[]>();
export const tracksDeleteOneEvent = createEvent<Track['id']>();
export const tracksSetOneEvent = createEvent<Track>();

export const $track = createStore<Track | null>(null).on(tracksSetOneEvent, (_, track) => track);

export const $trackList = createStore<Track[]>([])
  .on(tracksSetEvent, (_, tracks) => tracks)
  .on(tracksDeleteOneEffect.done, (tracks, { params: trackId }) =>
    tracks.filter((track) => trackId !== track.id),
  );
