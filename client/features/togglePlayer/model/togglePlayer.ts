'use client';
import { createEvent, createStore } from 'effector/compat';

export const pauseEvent = createEvent();
export const playEvent = createEvent();
export const togglePlayerEvent = createEvent();

export const $pause = createStore<boolean>(true)
  .on(playEvent, () => false)
  .on(pauseEvent, () => true)
  .on(togglePlayerEvent, (state) => !state);
