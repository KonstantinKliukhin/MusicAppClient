import axios from 'axios';
import { IGetTrackDTO } from '@entities/track/dto/GetTrack.dto';
import { ICreateTrackDto } from '@entities/track/dto/CreateTrack.dto';

const createTrack = async (track: ICreateTrackDto): Promise<void> => {
  const formData = new FormData();

  Object.entries(track).forEach(([field, value]) => {
    formData.append(field, value);
  });

  await axios.post<IGetTrackDTO[]>(`${process.env.NEXT_PUBLIC_API_PATH}/tracks`, formData);
  return;
};

export default createTrack;
