import express from "express";

//Importing controllers
import * as TaskController from "../controllers/taskHandler";
const router = express()
router.get("/", (req, res) => {
  console.log("inside route");
  res.json({
    msg: "here",
  });
});

router.get("/readTasks", TaskController.readTasks);

router.post('/createTask',TaskController.createTask);

router.delete('/deleteTask/:id',TaskController.deleteTask);

router.put('/updateTask/:id',TaskController.updatedTask);

export default router;
