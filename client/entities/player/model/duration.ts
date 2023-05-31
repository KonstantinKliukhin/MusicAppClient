import { createEvent, createStore } from 'effector';

export const durationSetEvent = createEvent<number>();
export const clearDurationEvent = createEvent<number>();

export const $duration = createStore<number>(0)
  .on(durationSetEvent, (duration) => duration)
  .reset(clearDurationEvent);
