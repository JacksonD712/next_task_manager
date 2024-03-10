import { Task } from "../types";
import { TaskAction, TaskActionTypes } from "../actions/actions";

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [],
};

export const taskReducer = (state: TaskState = initialState, action: TaskAction): TaskState => {
  switch (action.type) {
    case TaskActionTypes.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    default:
      return state;
  }
};
