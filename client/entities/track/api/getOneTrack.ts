import { jsonToTrack } from '../lib';
import { Track } from '../model';
import { GetTrackDtoType } from './types/GetTrack.dto';

export const getOneTrack = async (id: Track['id']): Promise<Track> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_PATH}/tracks/${id}`, {
    next: {
      tags: [''],
    },
  });

  const dto: GetTrackDtoType = await response.json();

  return jsonToTrack(dto);
};
