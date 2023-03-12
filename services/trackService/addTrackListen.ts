import axios from 'axios';
import { ITrackCommentDTO } from '@entities/track/dto/TrackComment.dto';
import { ITrack } from '@entities/track/Track';

const addTrackListen = async (trackId: ITrack['id']) => {
  return await axios.post<ITrackCommentDTO>(
    `${process.env.NEXT_PUBLIC_API_PATH}/tracks/listen/${trackId}`,
  );
};

export default addTrackListen;
