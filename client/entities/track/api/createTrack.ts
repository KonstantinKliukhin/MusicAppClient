import { CreateTrackDtoType, GetTrackDtoType } from './types';
import jsonToTrack from '../lib/jsonToTrack';
import { Track } from '../model';
import urlParser from '../../../../old/shared/utils/UrlParser';
import { HTTP_METHODS_TYPE } from '@commonTypes/HttpMethods';
import { ROUTES } from '../../../../routes';
import { enhancedFetch } from '../../../shared/api';

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

  return jsonToTrack(data, urlParser);
};

export default createTrack;
