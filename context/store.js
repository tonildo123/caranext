import { configureStore } from '@reduxjs/toolkit';
import CurrentLocationSliceContext from './CurrentLocationSliceContext';

export const store = configureStore({
  reducer: {
    currentLocation:CurrentLocationSliceContext,
  },
})