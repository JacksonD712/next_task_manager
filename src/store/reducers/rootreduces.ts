import { combineReducers } from 'redux';
import feedbackReducer from './feedbackreducer';

const rootReducer = combineReducers({
  feedback: feedbackReducer ,
  name : feedbackReducer
  
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;