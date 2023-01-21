import tracksReducer from "./apiSlices/tracksSlice";
import playerReducer from './slices/playerSlice'

const rootReducer = {
  ...tracksReducer,
  player: playerReducer,
}

export default rootReducer;