import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './slice/AuthSlice';

export default configureStore({
  reducer: {
    auth : AuthSlice,
  }
})