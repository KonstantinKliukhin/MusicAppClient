import { ITrackCommentDTO } from './TrackComment.dto';

export interface IGetTrackDTO {
  id: number;
  name: string;
  artist: string;
  text: string;
  listens: number;
  picture: string;
  audio: string;
  comments: ITrackCommentDTO[];
}
