import * as TaskHandlerModel from '../models/taskHandler'
export function readTasks(){
    console.log("calling db to read data");
    const readData=TaskHandlerModel.readTasks();
    console.log(readData);
    return  readData;
}