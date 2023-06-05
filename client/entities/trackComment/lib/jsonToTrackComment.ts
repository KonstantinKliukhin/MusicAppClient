import { TrackComment } from '../model';
import { TrackCommentDTOType } from '../api';

function jsonToTrackComment(json: TrackCommentDTOType): TrackComment {
  return new TrackComment(json.id, json.username, json.text);
}

export default jsonToTrackComment;
