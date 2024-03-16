import {configureStore} from '@reduxjs/toolkit';
import homeSlice from '../../screens/Home/ducks/data/Home.reducer';

const rootStore = configureStore({
  reducer: {
    homeSlice,
  },
});

export default rootStore;
