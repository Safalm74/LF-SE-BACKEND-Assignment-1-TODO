// importing module express 
import express from "express";
//Importing controllers
import * as TaskController from "../controllers/taskHandler";

//creating route
const router = express()

//route to create task: C
router.post('/createTask',TaskController.createTask);

//route to read tasks:  R
router.get("/readTasks", TaskController.readTasks);

//route to update task: U
router.put('/updateTask/:id',TaskController.updatedTask);

//route to delete task: D
router.delete('/deleteTask/:id',TaskController.deleteTask);

//exporting tasks handler router
export default router;
