import express from "express";

//Importing controllers
import * as TaskController from "../controllers/taskHandler";
const router = express();

router.get("/readTasks", TaskController.readTasks);

router.get("/", (req, res) => {
  console.log("inside route");
  res.json({
    msg: "here",
  });
});

export default router;
