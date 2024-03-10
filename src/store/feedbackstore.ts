// feedbackStore.ts
import { configureStore } from '@reduxjs/toolkit';
import feedbackReducer from './reducers/feedbackreducer';

const feedbackStore = configureStore({
  reducer: {
    feedback: feedbackReducer,
    name : feedbackReducer 
  },

});

export default feedbackStore;
