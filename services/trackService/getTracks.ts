import { IGetTrackDTO } from '@entities/track/dto/GetTrack.dto';
import TrackAdapter from '../../types/entities/track/adapters/TrackAdapter';
import TrackCommentAdapter from '@entities/track/adapters/TrackCommentAdapter';
import UrlParser from '../../shared/utils/UrlParser';

const getTracks = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_PATH}/tracks`, { cache: 'no-store' });

  const dto: IGetTrackDTO[] = await response.json();

  return dto.map((track) => new TrackAdapter(track, TrackCommentAdapter, UrlParser));
};

export default getTracks;
