import playerSlice from './slices/playerSlice';
import uploadTrackStepsSlice from './slices/uploadTrackSteps'

const actions = {
  ...playerSlice.actions,
  ...uploadTrackStepsSlice.actions,
}

export default actions;