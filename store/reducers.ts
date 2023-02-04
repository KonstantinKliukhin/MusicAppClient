// import tracksReducer from "./apiSlices/tracksSlice";
import playerSlice from './slices/playerSlice'
import uploadTrackStepsSlice from './slices/uploadTrackSteps'

const rootReducer = {
  // ...tracksReducer,
  player: playerSlice.reducer,
  uploadTrackSteps: uploadTrackStepsSlice.reducer
}

export default rootReducer;