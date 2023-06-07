import { TrackCommentDTOType } from './TrackComment.dto';

export type GetTrackDtoType = {
  id: number;
  name: string;
  artist: string;
  text: string;
  listens: number;
  picture: string;
  audio: string;
  comments: TrackCommentDTOType[];
  createdAt: string;
  updatedAt: string;
};
