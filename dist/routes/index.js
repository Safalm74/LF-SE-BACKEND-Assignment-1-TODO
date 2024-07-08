"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import router for handiling tasks
const taskHandler_1 = __importDefault(require("./taskHandler"));
//creating router object
const router = (0, express_1.default)();
//route to handle tasks
router.use("/taskHandler", taskHandler_1.default);
// route for home
router.get("/", (req, res) => {
    res.json({
        msg: "Home",
    });
});
exports.default = router;
