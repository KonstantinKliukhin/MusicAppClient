import { ITrack } from '@entities/track/Track';
import TrackAdapter from '../../types/entities/track/adapters/TrackAdapter';
import TrackCommentAdapter from '../../types/entities/track/adapters/TrackCommentAdapter';
import UrlParser from '../../shared/utils/UrlParser';
import { IGetTrackDTO } from '@entities/track/dto/GetTrack.dto';

const getOneTrack = async (id: ITrack['id']): Promise<ITrack> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_PATH}/tracks/${id}`, {
    cache: 'no-store',
  });

  const dto: IGetTrackDTO = await response.json();

  return new TrackAdapter(dto, TrackCommentAdapter, UrlParser);
};

export default getOneTrack;
