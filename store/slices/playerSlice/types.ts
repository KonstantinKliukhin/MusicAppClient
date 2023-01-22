import { ITrack } from "../../../types/entities/track/Track";

export interface PlayerState {
  active: null | ITrack
  volume: number
  duration: number
  currentTime: number
  pause: boolean
}