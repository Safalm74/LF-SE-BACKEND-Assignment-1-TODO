"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTask = createTask;
exports.readTasks = readTasks;
exports.readReaminingTasks = readReaminingTasks;
exports.updateTask = updateTask;
exports.deleteTask = deleteTask;
//Array for storing tasks
let tasks = [
    {
        id: "1",
        name: "wash dress",
        is_finished: false,
    },
];
//function to check if task exists on tasks array
function checkOnTasks(id) {
    return tasks.find(({ id: taskId }) => {
        return taskId === id;
    });
}
//function to add task on array (create)
function createTask(task) {
    for (let taskobj of tasks) {
        if (taskobj.name == task.name) {
            return "Already Exists";
        }
    }
    //getting new id by increasing latest id by 1
    const newTaskId = `${+(tasks[tasks.length - 1].id) + 1}`;
    //initializing is_finished flag as false
    const initialFinishFlag = false;
    //creating task obj 
    const newTask = Object.assign({ id: newTaskId, is_finished: initialFinishFlag }, task);
    //pushing the obj to task to tasks array
    tasks.push(newTask);
    return `Task Created: ${task.name}`;
}
//reading all task function
function readTasks() {
    return tasks;
}
//reading reamining task
function readReaminingTasks() {
    const taskRemaining = tasks.filter((task) => {
        return !task.is_finished;
    });
    return taskRemaining;
}
//change task constained on tasks array
function updateTask(id, updatedTask) {
    //calling function to return obj with the id
    const update_obj = checkOnTasks(id);
    if (update_obj) { //if obj exists on tasks array
        const temp = update_obj.name;
        const initialFinishFlag = false;
        const newUpdatedTask = Object.assign({ id: id, is_finished: initialFinishFlag }, updatedTask);
        //replacing the obj with updated obj
        Object.assign(update_obj, newUpdatedTask);
        return ` task updated: from (${temp}) to (${update_obj.name})`;
    }
    else {
        return `no task with given id:${id}`;
    }
}
//delete task from task array
function deleteTask(id) {
    //calling function to return obj with the id
    const delete_obj = checkOnTasks(id);
    if (delete_obj) { //if obj exists on tasks array
        tasks = tasks.filter(({ id: taskId }) => {
            return !(taskId === id);
        });
        return ` task deleted: ${delete_obj.name}`;
    }
    else {
        return `no task with given id:${id}`;
    }
}
