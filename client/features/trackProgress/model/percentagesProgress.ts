import { $currentTime, $duration } from '../../../entities/player';
import { combine } from 'effector';

export const $percentagesProgress = combine(
  $currentTime,
  $duration,
  (currentTime, duration) => (duration / currentTime) * 100,
);
