import { ITask } from "../interface/task";

type task={
        id: string,
        name: string,
        is_finished:boolean,
}
const tasks :task[]=[
    {
        id:'1',
        name:'wash dress',
        is_finished:false
    }
]


export function readTasks(){
    return tasks;
}

export function readReaminingTasks(){
    const taskRemaining=tasks.filter(
        (task)=>{
            return !task.is_finished
        }
    );
    return taskRemaining;
}

export function createTask(task:ITask){
    const newTaskId=`${tasks.length+1}`;
    const newTask={
        id:newTaskId,
        ...task
    }
    tasks.push(newTask);
}

