import {Request, Response} from 'express';
import * as TaskhandlerService from '../services/taskHandlers';
import { ITask } from '../interface/task';

export function readTasks(req:Request,res:Response){
    const data=TaskhandlerService.readTasks();
    res.json(data);
}

export function createTask(req:Request,res:Response){
    const {body}=req;
    const created=TaskhandlerService.createTask(body);
    res.json(body);
}

export function deleteTask(req:Request,res:Response){
    const id=req.params.id;
    TaskhandlerService.deleteTask(id);
    res.json(
        {
            msg:"task removes sucessfully",
            id:id
        }
    );
}
export function updatedTask(req:Request,res:Response){
    const id=req.params.id;
    const {body}=req;
    TaskhandlerService.updatedTask(id,body)
    res.json(
        {
            msg:"task updated sucessfully",
            id:id
        }
    );
}