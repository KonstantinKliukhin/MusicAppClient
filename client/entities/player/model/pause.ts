import { createEvent, createStore } from 'effector';

export const pauseEvent = createEvent();
export const playEvent = createEvent();

export const $pause = createStore<boolean>(true);
