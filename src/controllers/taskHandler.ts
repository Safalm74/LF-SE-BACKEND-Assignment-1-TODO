import {Request, Response} from 'express';
import * as TaskhandlerService from '../services/taskHandlers';

export function readTasks(req:Request,res:Response){
    const data=TaskhandlerService.readTasks();
    console.log(data);
    res.json(data);
}