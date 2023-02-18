import axios from 'axios';
import { IGetTrackDTO } from '@entities/track/dto/GetTrack.dto';
import { ICreateTrackDto } from '@entities/track/dto/CreateTrack.dto';
import TrackAdapter from '@entities/track/adapters/TrackAdapter';
import TrackCommentAdapter from '@entities/track/adapters/TrackCommentAdapter';
import UrlParser from '../../utils/UrlParser';
import { ITrack } from '@entities/track/Track';

const createTrack = async (track: ICreateTrackDto): Promise<ITrack> => {
  const formData = new FormData();

  Object.entries(track).forEach(([field, value]) => {
    formData.append(field, value);
  });

  const res = await axios.post<IGetTrackDTO>(
    `${process.env.NEXT_PUBLIC_API_PATH}/tracks`,
    formData,
  );
  return new TrackAdapter(res.data, TrackCommentAdapter, UrlParser);
};

export default createTrack;
