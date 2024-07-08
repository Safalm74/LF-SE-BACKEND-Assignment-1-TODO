import express from "express";

//import router for handiling tasks
import taskHandler from "./taskHandler";

//creating router object
const router = express();

//route to handle tasks
router.use("/taskHandler", taskHandler);

// route for home
router.get("/", (req, res) => {
  res.json({
    msg: "Home",
  });
});
export default router;
