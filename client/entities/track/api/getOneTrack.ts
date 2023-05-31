import { Track } from '../model';
import jsonToTrack from '../lib/jsonToTrack';
import urlParser from '../../../../old/shared/utils/UrlParser';
import { GetTrackDtoType } from './types';

const getOneTrack = async (id: Track['id']): Promise<Track> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_PATH}/tracks/${id}`, {
    next: {
      tags: [''],
    },
  });

  const dto: GetTrackDtoType = await response.json();

  return jsonToTrack(dto, urlParser);
};

export default getOneTrack;
