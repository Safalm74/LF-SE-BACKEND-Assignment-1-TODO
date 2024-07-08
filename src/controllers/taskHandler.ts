import {Request, Response} from 'express';
import * as TaskhandlerService from '../services/taskHandlers';

export function readTasks(req:Request,res:Response){
    const data=TaskhandlerService.readTasks();
    res.json(data);
}

export function createTask(req:Request,res:Response){
    const {body}=req;
    const created=TaskhandlerService.createTask(body);
    res.json(body);
}