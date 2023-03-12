import { ITrack } from '@entities/track/Track';

export interface IPlayerState {
  active: null | ITrack;
  volume: number;
  duration: number;
  currentTime: number;
  pause: boolean;
  tracksQueue: ITrack[];
}
