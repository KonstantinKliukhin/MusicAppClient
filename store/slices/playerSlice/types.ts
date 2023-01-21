import { ITrack } from "../../../types/entities/track/track";

export interface PlayerState {
  active: null | ITrack
  volume: number
  duration: number
  currentTime: number
  pause: boolean
}