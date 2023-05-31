import { GetTrackDtoType } from './types';
import jsonToTrack from '../lib/jsonToTrack';
import urlParser from '../../../../old/shared/utils/UrlParser';

const getTracks = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_PATH}/tracks`, { cache: 'no-store' });

  const dto: GetTrackDtoType[] = await response.json();

  return dto.map((track) => jsonToTrack(track, urlParser));
};

export default getTracks;
