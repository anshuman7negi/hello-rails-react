import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './greetings/greetingSlice';

const store = configureStore({
  reducer: {
    greetings: greetingsReducer,
  },
});

export default store;