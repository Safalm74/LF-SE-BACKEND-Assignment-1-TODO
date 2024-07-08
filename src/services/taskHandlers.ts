import { ITask } from "../interface/task";
import * as TaskHandlerModel from "../models/taskHandler";

export function readTasks() {
  const readData = TaskHandlerModel.readTasks();
  return readData;
}

export function createTask(task:ITask) {
    return TaskHandlerModel.createTask(task);
}
