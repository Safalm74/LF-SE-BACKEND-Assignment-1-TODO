import { ITask } from "../interface/task";

type task={
        id: string,
        name: string,
        is_finished:boolean,
}
let tasks :task[]=[
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
    const initialFinishFlag=false;
    const newTask={
        id:newTaskId,
        is_finished:initialFinishFlag,
        ...task
    }
    tasks.push(newTask);
    console.log(tasks);
    return true;
}

export function deleteTask(id:string){
    tasks=tasks.filter(
        ({id:taskId})=>{
            return !(taskId===id);
        }
    )
}

export function updateTask(id:string,updatedTask:ITask){
    for (let i=0;i<tasks.length;i++){
        if(tasks[i].id===id){
            console.log('updating ',id);
            tasks[i].name=updatedTask.name;
            return true
        }
    }
    return false;
}

