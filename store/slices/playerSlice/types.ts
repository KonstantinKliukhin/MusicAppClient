import { Track } from '@entities/track/Track';

export interface IPlayerState {
  active: null | Track;
  volume: number;
  duration: number;
  currentTime: number;
  pause: boolean;
  tracksQueue: Track[];
}
