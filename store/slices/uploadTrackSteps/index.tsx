import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUploadTrackSteps } from './types';

const initialState: IUploadTrackSteps = {
  currentStep: 0,
  validSteps: [],
  allowedSteps: [0],
};

const uploadTrackStepsSlice = createSlice({
  name: 'uploadTrackSteps',
  initialState: initialState,
  reducers: {
    changeUploadTrackStep: (state, action: PayloadAction<number>) => {
      if (!state.allowedSteps.includes(action.payload)) return;
      state.currentStep = action.payload;
    },
    addValidStep: (state, action: PayloadAction<number>) => {
      if (!state.validSteps.includes(action.payload)) {
        state.validSteps.push(action.payload);
      }

      if (!state.allowedSteps.includes(action.payload + 1)) {
        state.allowedSteps.push(action.payload + 1);
      }
    },
    deleteValidStep: (state, action: PayloadAction<number>) => {
      state.validSteps = state.validSteps.filter((step) => step !== action.payload);
    },
    clearStepsData: (state) => {
      state = initialState;
    },
  },
});

export default uploadTrackStepsSlice;
