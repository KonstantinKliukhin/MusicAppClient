import { HTTP_METHODS_TYPE, protectedFetch } from '@shared/api';
import { ROUTES } from '@shared/config';
import { jsonToTrack } from '../lib';
import { Track } from '../model';
import { CreateTrackDtoType } from './types/CreateTrack.dto';
import { GetTrackDtoType } from './types/GetTrack.dto';

export const createTrack = async (track: CreateTrackDtoType): Promise<Track> => {
  const formData = new FormData();

  Object.entries(track).forEach(([field, value]) => formData.append(field, value));

  const res = await protectedFetch(`${process.env.NEXT_PUBLIC_API_PATH}/tracks`, {
    method: HTTP_METHODS_TYPE.POST,
    body: formData,
    revalidate: [ROUTES.TRACKS_LIST],
    waitRevalidate: true,
  });

  const data: GetTrackDtoType = await res.json();

  return jsonToTrack(data);
};
