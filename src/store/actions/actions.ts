import { Task } from "../types"; 

export enum TaskActionTypes {
  ADD_TASK = 'ADD_TASK',
}

interface AddTaskAction {
  type: TaskActionTypes.ADD_TASK;
  payload: Task;
}

export type TaskAction = AddTaskAction;

export const addTask = (task: Task): AddTaskAction => ({
  type: TaskActionTypes.ADD_TASK,
  payload: task,
});
