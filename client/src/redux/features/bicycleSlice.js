import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

const bicycleSlice = createSlice({
  name: 'bicycle',
  initialState,
  reducers: {
    setBicycles: (state, action) => {
      state.value = action.payload;
    },
    addBicycle: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    deleteBicycle: (state, action) => {
      state.value = state.value.filter((obj) => obj.id !== action.payload);
    },
    updateBicycle: (state, action) => {
      const foundItem = state.value.find((obj) => obj.id === action.payload.id);
      if (foundItem) {
        foundItem.status = action.payload.status;
      }
    },
  },
});

export const { setBicycles, addBicycle, deleteBicycle, updateBicycle } = bicycleSlice.actions;

export const getBicyclesState = (state) => state.bicycle.value;

export default bicycleSlice.reducer;
