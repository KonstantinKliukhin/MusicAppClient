import { Track } from '../model';
import { GetTrackDtoType } from '../api';
import IURLParser from '@commonTypes/urlParser';
import { jsonToTrackComment } from '../../trackComment/lib';

function jsonToTrack(json: GetTrackDtoType, urlParser: IURLParser): Track {
  return new Track(
    json.id,
    json.name,
    json.artist,
    json.text,
    json.listens,
    urlParser.getUrl(json.picture),
    urlParser.getUrl(json.audio),
    json.comments.map(jsonToTrackComment),
  );
}

export default jsonToTrack;
