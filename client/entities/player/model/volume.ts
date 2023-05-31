import { createEvent, createStore } from 'effector';

export const setVolumeActionEvent = createEvent<number>();

export const $volume = createStore<number>(80).on(setVolumeActionEvent, (_, volume) => volume);
