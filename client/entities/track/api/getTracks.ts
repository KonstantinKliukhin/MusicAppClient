import { GetTrackDtoType } from './types';
import jsonToTrack from '../lib/jsonToTrack';

const getTracks = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_PATH}/tracks`, { cache: 'no-store' });

  const dto: GetTrackDtoType[] = await response.json();

  return dto.map((track) => jsonToTrack(track));
};

export default getTracks;
