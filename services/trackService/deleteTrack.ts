import { ITrack } from '../../types/entities/track/Track';
import { IGetTrackDTO } from '../../types/entities/track/dto/GetTrack.dto';
import axios from 'axios';

const deleteOneTrack = async (id: ITrack['id']): Promise<void> => {
  await axios.delete<IGetTrackDTO>(`${process.env.NEXT_PUBLIC_API_PATH}/tracks/${id}`);
  return;
};

export default deleteOneTrack;
