import { createEvent, createStore } from 'effector';

export const setCurrentTime = createEvent<number>();

export const $currentTime = createStore<number>(0);
