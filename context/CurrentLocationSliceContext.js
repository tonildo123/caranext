import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    currentLocation:null,
};

const CurrentLocationSliceContext = createSlice({
  name: 'currentLocation',
  initialState,
  reducers: {
    setCurrentLocationInfo: (state, action) => {
      const { currentLocation } = action.payload;
      state.currentLocation = currentLocation;
    },
    setClearLocationInfo: (state, action) => {
      state.currentLocation = null;
    },
  },
});

export const { setCurrentLocationInfo, setClearLocationInfo } = CurrentLocationSliceContext.actions;

export default CurrentLocationSliceContext.reducer;