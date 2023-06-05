import { Track } from '../model';
import { GetTrackDtoType } from '../api';
import { jsonToTrackComment } from '../../trackComment/lib';
import { urlParser } from '../../../shared/lib';

function jsonToTrack(json: GetTrackDtoType): Track {
  return new Track(
    json.id,
    json.name,
    json.artist,
    json.text,
    json.listens,
    urlParser.getUrl(json.picture),
    urlParser.getUrl(json.audio),
    json.comments.map(jsonToTrackComment),
    json.createdAt,
    json.updatedAt,
  );
}

export default jsonToTrack;
