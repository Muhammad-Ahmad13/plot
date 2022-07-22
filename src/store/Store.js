import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './slice/AuthSlice';
import TokenSlice from './slice/TokenSlice';

export default configureStore({
  reducer: {
    auth : AuthSlice,
    tok : TokenSlice
  },
})
