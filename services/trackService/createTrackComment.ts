import { ITrackCommentDTO } from '@entities/track/dto/TrackComment.dto';
import { ICreateCommentDto } from '@entities/track/dto/CreateComment.dto';
import jsonToTrackComment from '@entities/track/adapters/jsonToTrackComment';
import { TrackComment } from '@entities/track/TrackComment';
import { HTTP_METHODS_TYPE } from '@commonTypes/HttpMethods';

type CreateTrackCommentType = (data: {
  trackId: TrackComment['id'];
  comment: ICreateCommentDto;
}) => Promise<TrackComment>;

const createTrackComment: CreateTrackCommentType = async ({
  trackId,
  comment,
}): Promise<TrackComment> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_PATH}/tracks/${trackId}/comment`, {
    method: HTTP_METHODS_TYPE.POST,
    body: JSON.stringify(comment),
  });

  const data: ITrackCommentDTO = await res.json();

  return jsonToTrackComment(data);
};

export default createTrackComment;
