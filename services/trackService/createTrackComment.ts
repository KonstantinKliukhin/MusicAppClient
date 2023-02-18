import axios from 'axios';
import { ITrackCommentDTO } from '@entities/track/dto/TrackComment.dto';
import { ICreateCommentDto } from '@entities/track/dto/CreateComment.dto';
import TrackCommentAdapter from '@entities/track/adapters/TrackCommentAdapter';
import { ITrackComment } from '@entities/track/TrackComment';

type CreateTrackCommentType = (data: {
  trackId: ITrackComment['id'];
  comment: ICreateCommentDto;
}) => Promise<ITrackComment>;

const createTrackComment: CreateTrackCommentType = async ({
  trackId,
  comment,
}): Promise<ITrackComment> => {
  const { data: dto } = await axios.post<ITrackCommentDTO>(
    `${process.env.NEXT_PUBLIC_API_PATH}/tracks/${trackId}/comment`,
    comment,
  );

  return new TrackCommentAdapter(dto);
};

export default createTrackComment;
