'use client';
import { createEvent, createStore } from 'effector/compat';

export const setVolumeActionEvent = createEvent<number>();
export const $volume = createStore<number>(80).on(setVolumeActionEvent, (_, volume) => volume);
