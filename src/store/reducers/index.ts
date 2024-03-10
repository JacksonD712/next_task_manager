import { combineReducers } from 'redux';
import { taskReducer } from './reducer';

export const rootReducer = combineReducers({
  example: taskReducer,
});

export type RootState = ReturnType<typeof rootReducer>;