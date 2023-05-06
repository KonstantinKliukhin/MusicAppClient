import { Track } from '../Track';
import { IGetTrackDTO } from '../dto/GetTrack.dto';
import IURLParser from '@commonTypes/urlParser';
import jsonToTrackComment from '@entities/track/adapters/jsonToTrackComment';

function jsonToTrack(json: IGetTrackDTO, urlParser: IURLParser): Track {
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
