import { createStore } from 'redux';
import {taskReducer} from './reducers/reducer';

import rootReducer from './reducers/rootreduces';

const store = createStore(taskReducer);

export default store;
