import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITrack } from "../../../types/entities/track/Track";
import { IPlayerState } from "./types";

const initialState: IPlayerState = {
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
      if (action.payload?.id === state.active?.id) return;
      state.active = action.payload;
      state.duration = 0;
      state.currentTime = 0;
    }
  }
});

export default playerSlice;

