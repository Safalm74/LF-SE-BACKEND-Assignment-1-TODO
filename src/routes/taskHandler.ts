// importing module express 
import express from "express";

//Importing controllers
import * as TaskController from "../controllers/taskHandler";

//creating route
const router = express()

//route to read tasks
router.get("/readTasks", TaskController.readTasks);

//route to create task
router.post('/createTask',TaskController.createTask);

//route to delete task
router.delete('/deleteTask/:id',TaskController.deleteTask);

//route to update task
router.put('/updateTask/:id',TaskController.updatedTask);

//exporting tasks handler router
export default router;
