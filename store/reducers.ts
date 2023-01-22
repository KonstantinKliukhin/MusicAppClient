// import tracksReducer from "./apiSlices/tracksSlice";
import playerSlice from './slices/playerSlice'

const rootReducer = {
  // ...tracksReducer,
  player: playerSlice.reducer,
}

export default rootReducer;