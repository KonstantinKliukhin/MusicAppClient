import { createEvent, createStore } from 'effector';
import { Track } from '../../track/model';

const tracksQueueSetQueueEvent = createEvent<Track[]>();
const tracksQueueSetNextEvent = createEvent<Track>();

const $tracksQueue = createStore<Track[]>([])
  .on(tracksQueueSetQueueEvent, (state, tracks) => tracks)
  .on(tracksQueueSetNextEvent, (state, track) => [track, ...state]);
