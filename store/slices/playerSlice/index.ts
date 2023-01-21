import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITrack } from "../../../types/entities/track/track";
import { PlayerState } from "./types";

const initialState: PlayerState = {
  currentTime: 0,
  duration: 0,
  active: null,
  volume: 80,
  pause: true
};

const playerSlice = createSlice({
  name: "player",
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
    setActiveTrack: (state, action: PayloadAction<null | ITrack>) => {
      if (action.payload?._id === state.active?._id) return;
      state.active = action.payload;
      state.duration = 0;
      state.currentTime = 0;
    }
  }
});

export const trackActions = playerSlice.actions;

export default playerSlice.reducer;

