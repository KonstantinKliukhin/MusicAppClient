import { TrackComment } from '../../../trackComment/model/types/TrackComment';
import { TrackCommentDTOType } from '../../../trackComment';

export class Track {
  id: number;
  name: string;
  artist: string;
  text: string;
  listens: number;
  picture: string;
  audio: string;
  comments: TrackComment[];

  constructor(
    id: number,
    name: string,
    artist: string,
    text: string,
    listens: number,
    picture: string,
    audio: string,
    comments: TrackCommentDTOType[],
  ) {
    this.id = id;
    this.name = name;
    this.artist = artist;
    this.text = text;
    this.listens = listens;
    this.picture = picture;
    this.audio = audio;
    this.comments = comments;
  }
}
