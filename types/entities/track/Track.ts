import {ITrackComment} from "./TrackComment";

export interface ITrack {
  id: string
  name: string
  artist: string
  text: string
  listens: number
  picture: string
  audio: string
  comments: ITrackComment[]
}
