import { ITask } from "../interface/task";

type task = {
  id: string;
  name: string;
  is_finished: boolean;
};
let tasks: task[] = [
  {
    id: "1",
    name: "wash dress",
    is_finished: false,
  },
];

export function readTasks() {
  return tasks;
}

export function readReaminingTasks() {
  const taskRemaining = tasks.filter((task) => {
    return !task.is_finished;
  });
  return taskRemaining;
}

export function createTask(task: ITask) {
  for (let taskobj of tasks) {
    if (taskobj.name == task.name) {
      return "Already Exists";
    }
  }
  const newTaskId = `${tasks.length + 1}`;
  const initialFinishFlag = false;
  const newTask = {
    id: newTaskId,
    is_finished: initialFinishFlag,
    ...task,
  };
  tasks.push(newTask);
  return `Task Created: ${task.name}`;
}

export function deleteTask(id: string) {
  const delete_obj = tasks.find(({ id: taskId }) => {
    return taskId === id;
  });
  if (delete_obj) {
    tasks = tasks.filter(({ id: taskId }) => {
      return !(taskId === id);
    });
    return ` task deleted: ${delete_obj.name}`;
  } else {
    return `no task with given id:${id}`;
  }
}

export function updateTask(id: string, updatedTask: ITask) {
  const update_obj = tasks.find(({ id: taskId }) => {
    return taskId === id;
  });
  if (update_obj) {
    const temp = update_obj.name;
    update_obj.name = updatedTask.name;
    return ` task updated: from ${temp} to ${update_obj.name}`;
  } else {
    return `no task with given id:${id}`;
  }
}
