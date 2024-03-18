import {createSlice} from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    loading: true,
    destination: '',
    origin: '',
    response: [],
    err: false,
    date: new Date().toISOString(),
  },
  reducers: {
    fetchData(state, action) {
      (state.response = action.payload.response),
        (state.err = action.payload.err),
        (state.loading = action.payload.loading);
    },
    setOriginAndDestinationData(state, action) {
      (state.destination = action.payload.destination),
        (state.origin = action.payload.origin);
    },
    selectedDate(state, action) {
      state.date = action.payload.toISOString();
    },
  },
});

export const {fetchData, setOriginAndDestinationData, selectedDate} =
  homeSlice.actions;

export default homeSlice.reducer;
