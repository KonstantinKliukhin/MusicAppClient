import { CreateTrackDtoType, GetTrackDtoType } from './types';
import jsonToTrack from '../lib/jsonToTrack';
import { Track } from '../model';
import { HTTP_METHODS_TYPE } from '../../../shared/types';
import { ROUTES } from '../../../../routes';
import { enhancedFetch } from '../../../shared/api';
import { urlParser } from '../../../shared/lib';

const createTrack = async (track: CreateTrackDtoType): Promise<Track> => {
  const formData = new FormData();

  Object.entries(track).forEach(([field, value]) => {
    formData.append(field, value);
  });

  const res = await enhancedFetch(`${process.env.NEXT_PUBLIC_API_PATH}/tracks`, {
    method: HTTP_METHODS_TYPE.POST,
    body: formData,
    revalidate: [ROUTES.TRACKS_LIST],
  });

  const data: GetTrackDtoType = await res.json();

  return jsonToTrack(data);
};

export default createTrack;
