import { TrackComment } from '../model/types/TrackComment';
import { TrackCommentDTOType } from '../api/types/TrackComment.dto';

function jsonToTrackComment(json: TrackCommentDTOType): TrackComment {
  return new TrackComment(json.id, json.username, json.text);
}

export default jsonToTrackComment;
