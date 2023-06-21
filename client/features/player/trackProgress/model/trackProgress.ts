'use client';
import { createEvent, createStore, sample } from 'effector/compat';

export const trackEndedEvent = createEvent();
export const setCurrentTimeEvent = createEvent<number>();
export const currentTimeTickEvent = createEvent<number>();
export const durationSetEvent = createEvent<number>();
export const clearDurationEvent = createEvent<number>();

export const $currentTime = createStore<number>(0)
  .on(setCurrentTimeEvent, (_, time) => time)
  .on(currentTimeTickEvent, (_, time) => time);

export const $duration = createStore<number>(0)
  .on(durationSetEvent, (_, duration) => duration)
  .reset(clearDurationEvent);

sample({
  clock: $currentTime,
  source: $duration,
  filter: (duration, currentTime) => currentTime >= duration,
  target: trackEndedEvent,
});
