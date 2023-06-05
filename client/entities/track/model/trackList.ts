import { createEffect, createEvent, createStore } from 'effector/compat'
import { Track } from './types'
import { addTrackListen, createTrack, CreateTrackDtoType, deleteTrack, getOneTrack } from '../api';

export const tracksCreateOneEffect = createEffect(
  async (dto: CreateTrackDtoType) => await createTrack(dto),
);
export const tracksDeleteOneEffect = createEffect(async (id: Track['id']) => await deleteTrack(id));
// export const tracksGetOneEffect = createEffect(async (id: Track['id']) => await getOneTrack(id));
export const tracksAddListenEffect = createEffect(async (id: Track['id']) => await addTrackListen(id));

export const tracksSetEvent = createEvent<Track[]>();
export const tracksSetOneEvent = createEvent<Track>();

export const $track = createStore<Track | null>(null).on(tracksSetOneEvent, (_, track) => track);

export const $trackList = createStore<Track[]>([])
  .on(tracksSetEvent, (_, tracks) => tracks)
  .on(tracksDeleteOneEffect.done, (tracks, { params: trackId }) =>
    tracks.filter((track) => trackId !== track.id),
  );
