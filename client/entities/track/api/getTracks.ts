import { Track } from '@entities/track';
import { enhancedFetch } from '@shared/api';
import { jsonToTrack } from '../lib';
import { GetTrackDtoType } from './types/GetTrack.dto';

export const getTracks = async (): Promise<Track[]> => {
  const response = await enhancedFetch(`${process.env.NEXT_PUBLIC_API_PATH}/tracks`, {
    cache: 'no-store',
  });

  const dto: GetTrackDtoType[] = await response.json();

  return dto.map((track) => jsonToTrack(track));
};
