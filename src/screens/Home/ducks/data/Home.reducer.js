import {createSlice} from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    loading: false,
  },
  reducers: {
    fetchData(state, action) {
      state.loading = action.payload;
    },
  },
});

export const {fetchData} = homeSlice.actions;

export default homeSlice.reducer;
