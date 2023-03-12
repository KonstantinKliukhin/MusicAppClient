import { ITrack } from '../Track';
import { ITrackComment } from '../TrackComment';
import { IGetTrackDTO } from '../dto/GetTrack.dto';
import TrackCommentAdapter from './TrackCommentAdapter';
import UrlParser from '../../../../shared/utils/UrlParser';

class TrackAdapter<UrlParserType extends typeof UrlParser = typeof UrlParser> implements ITrack {
  id: string;
  name: string;
  artist: string;
  text: string;
  listens: number;
  picture: string;
  audio: string;
  comments: ITrackComment[];

  constructor(
    dto: IGetTrackDTO,
    CommentAdapter: typeof TrackCommentAdapter,
    UrlParserClass: UrlParserType,
  ) {
    this.id = dto._id;
    this.name = dto.name;
    this.artist = dto.artist;
    this.text = dto.text;
    this.listens = dto.listens;
    this.picture = new UrlParserClass(dto.picture).url;
    this.audio = new UrlParserClass(dto.audio).url;
    this.comments = dto.comments.map((comment) => new CommentAdapter(comment));
  }
}

export default TrackAdapter;
