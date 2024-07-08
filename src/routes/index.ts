import express from "express";
import taskHandler from "./taskHandler";
const router = express();

//route to handle tasks
router.use("/taskHandler", taskHandler);
router.get("/", (req, res) => {
  res.json({
    msg: "Home",
  });
});
export default router;
