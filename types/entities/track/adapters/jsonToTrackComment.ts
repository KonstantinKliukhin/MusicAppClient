import { TrackComment } from '../TrackComment';
import { ITrackCommentDTO } from '../dto/TrackComment.dto';

function jsonToTrackComment(json: ITrackCommentDTO): TrackComment {
  return new TrackComment(json.id, json.username, json.text);
}

export default jsonToTrackComment;
