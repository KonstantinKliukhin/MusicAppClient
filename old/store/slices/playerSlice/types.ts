import { Track } from '../../../src/entities/Track/model/types/Track';

export interface IPlayerState {
  active: null | Track;
  volume: number;
  duration: number;
  currentTime: number;
  pause: boolean;
  tracksQueue: Track[];
}
