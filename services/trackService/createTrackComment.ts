import axios from 'axios';
import { ITrackCommentDTO } from '@entities/track/dto/TrackComment.dto';
import { ICreateCommentDto } from '@entities/track/dto/CreateComment.dto';
import jsonToTrackComment from '@entities/track/adapters/jsonToTrackComment';
import { TrackComment } from '@entities/track/TrackComment';

type CreateTrackCommentType = (data: {
  trackId: TrackComment['id'];
  comment: ICreateCommentDto;
}) => Promise<TrackComment>;

const createTrackComment: CreateTrackCommentType = async ({
  trackId,
  comment,
}): Promise<TrackComment> => {
  const { data: dto } = await axios.post<ITrackCommentDTO>(
    `${process.env.NEXT_PUBLIC_API_PATH}/tracks/${trackId}/comment`,
    comment,
  );

  return jsonToTrackComment(dto);
};

export default createTrackComment;
