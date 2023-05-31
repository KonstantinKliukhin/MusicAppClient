import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Track } from '../../../src/entities/Track/model';
import { IPlayerState } from './types';

const initialState: IPlayerState = {
  currentTime: 0,
  duration: 0,
  active: null,
  volume: 80,
  pause: true,
  tracksQueue: [],
};

const playerSlice = createSlice({
  name: 'player',
  initialState: initialState,
  reducers: {
    pauseTrack: (state) => {
      state.pause = true;
    },
    playTrack: (state) => {
      state.pause = false;
    },
    setDuration: (state, action: PayloadAction<number>) => {
      state.duration = action.payload;
    },
    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload;
    },
    setCurrentTime: (state, action: PayloadAction<number>) => {
      state.currentTime = action.payload;
    },
    setActiveTrack: (state, action: PayloadAction<null | Track>) => {
      if (action.payload?.id === state.active?.id) return;
      state.active = action.payload;
      state.duration = 1;
      state.currentTime = 0;
    },
    setTracksQueue: (state, action: PayloadAction<Track[]>) => {
      state.tracksQueue = action.payload;
    },
    playNextTrack: (state) => {
      if (!state.tracksQueue.length) return;
      state.duration = 1;
      state.currentTime = 0;
      const active = state.active;

      if (!active) {
        state.active = state.tracksQueue[0];
        state.pause = false;
        return;
      }

      const activeIndex = state.tracksQueue.findIndex((track) => track.id === active.id);

      console.log(activeIndex, 'play next');

      if (activeIndex < 0) {
        state.active = state.tracksQueue[0];
      }

      if (!state.tracksQueue[activeIndex + 1]) {
        state.active = state.tracksQueue[0];
      } else {
        state.active = state.tracksQueue[activeIndex + 1];
      }

      state.pause = false;
    },
    playPrevTrack: (state) => {
      if (!state.tracksQueue.length) return;
      state.duration = 1;
      state.currentTime = 0;
      const active = state.active;

      if (!active) {
        state.active = state.tracksQueue[0];
        state.pause = false;
        return;
      }

      const activeIndex = state.tracksQueue.findIndex((track) => track.id === active.id);
      console.log(activeIndex, 'play prev');

      if (activeIndex < 0) {
        state.active = state.tracksQueue[0];
      }

      if (activeIndex - 1 < 0) {
        state.active = state.tracksQueue[state.tracksQueue.length - 1];
      } else {
        state.active = state.tracksQueue[activeIndex - 1];
      }

      state.pause = false;
    },
  },
});

export default playerSlice;
