import rootReducer from "./reducers";
import { configureStore } from "@reduxjs/toolkit";
import { trackApiMiddleware } from "./apiSlices/tracksSlice";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(trackApiMiddleware),
  devTools: true
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch