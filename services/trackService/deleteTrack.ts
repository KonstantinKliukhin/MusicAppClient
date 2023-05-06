import { Track } from '@entities/track/Track';
import { IGetTrackDTO } from '@entities/track/dto/GetTrack.dto';
import axios from 'axios';

const deleteOneTrack = async (id: Track['id']): Promise<void> => {
  await axios.delete<IGetTrackDTO>(`${process.env.NEXT_PUBLIC_API_PATH}/tracks/${id}`);
  return;
};

export default deleteOneTrack;
