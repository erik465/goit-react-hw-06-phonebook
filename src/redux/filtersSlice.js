import { createSlice } from '@reduxjs/toolkit';

const initialFilter = {
  query: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilter,
  reducers: {
    changeFilter(state, action) {
      state.query = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
