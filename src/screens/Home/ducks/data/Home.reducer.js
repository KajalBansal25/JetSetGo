import {createSlice} from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    loading: false,
    destination: '',
    origin: '',
  },
  reducers: {
    fetchData(state, action) {
      state.loading = action.payload;
    },
    setOriginAndDestinationData(state, action) {
      (state.destination = action.payload.destination),
        (state.origin = action.payload.origin);
    },
  },
});

export const {fetchData, setOriginAndDestinationData} = homeSlice.actions;

export default homeSlice.reducer;
