import axios from 'axios';
import { IGetTrackDTO } from '@entities/track/dto/GetTrack.dto';
import { ICreateTrackDto } from '@entities/track/dto/CreateTrack.dto';
import jsonToTrack from '@entities/track/adapters/jsonToTrack';
import { Track } from '@entities/track/Track';
import urlParser from '../../shared/utils/UrlParser';

const createTrack = async (track: ICreateTrackDto): Promise<Track> => {
  const formData = new FormData();

  Object.entries(track).forEach(([field, value]) => {
    formData.append(field, value);
  });

  const res = await axios.post<IGetTrackDTO>(
    `${process.env.NEXT_PUBLIC_API_PATH}/tracks`,
    formData,
  );
  return jsonToTrack(res.data, urlParser);
};

export default createTrack;
