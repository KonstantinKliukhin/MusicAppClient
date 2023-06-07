import { TrackCommentDTOType } from '../api';
import { TrackComment } from '../model';

export function jsonToTrackComment(json: TrackCommentDTOType): TrackComment {
  return new TrackComment(json.id, json.username, json.text);
}
