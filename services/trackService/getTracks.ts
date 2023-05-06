import { IGetTrackDTO } from '@entities/track/dto/GetTrack.dto';
import jsonToTrack from '@entities/track/adapters/jsonToTrack';
import urlParser from '../../shared/utils/UrlParser';

const getTracks = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_PATH}/tracks`, { cache: 'no-store' });

  const dto: IGetTrackDTO[] = await response.json();

  return dto.map((track) => jsonToTrack(track, urlParser));
};

export default getTracks;
