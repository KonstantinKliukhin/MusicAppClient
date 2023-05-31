import { CreateCommentDtoType, TrackCommentDTOType } from './types';
import jsonToTrackComment from '../lib/jsonToTrackComment';
import { TrackComment } from '../model/types';
import { HTTP_METHODS_TYPE } from '@commonTypes/HttpMethods';

type CreateTrackCommentType = (data: {
  trackId: TrackComment['id'];
  comment: CreateCommentDtoType;
}) => Promise<TrackComment>;

const createTrackComment: CreateTrackCommentType = async ({
  trackId,
  comment,
}): Promise<TrackComment> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_PATH}/tracks/${trackId}/comment`, {
    method: HTTP_METHODS_TYPE.POST,
    body: JSON.stringify(comment),
  });

  const data: TrackCommentDTOType = await res.json();

  return jsonToTrackComment(data);
};

export default createTrackComment;
