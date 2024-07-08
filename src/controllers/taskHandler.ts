import { Request, Response } from "express";
import * as TaskhandlerService from "../services/taskHandlers";
import { ITask } from "../interface/task";

export function readTasks(req: Request, res: Response) {
  const data = TaskhandlerService.readTasks();
  res.json(data);
}

export function createTask(req: Request, res: Response) {
  const { body } = req;
  try {
    res.json({
      Message: TaskhandlerService.createTask(body),
    });
  } catch (e) {
    console.log("Error Occured", e);
    res.json({
      Error: e,
    });
  }
}

export function deleteTask(req: Request, res: Response) {
  const id = req.params.id;
  try {
    res.json({
      msg: TaskhandlerService.deleteTask(id),
    });
  } catch (e) {
    console.log("Error Occured", e);
    res.json({
      Error: e,
    });
  }
}
export function updatedTask(req: Request, res: Response) {
  const id = req.params.id;
  const { body } = req;
  try {
    res.json({
      msg: TaskhandlerService.updatedTask(id, body),
    });
  } catch (e) {
    console.log("Error Occured", e);
    res.json({
      Error: e,
    });
  }
}
