"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTask = createTask;
exports.readTasks = readTasks;
exports.updatedTask = updatedTask;
exports.deleteTask = deleteTask;
//importing services for task handler
const TaskhandlerService = __importStar(require("../services/taskHandlers"));
//controller function to createtask
function createTask(req, res) {
    const { body } = req;
    try {
        res.json({
            Message: TaskhandlerService.createTask(body),
        });
    }
    catch (e) {
        console.log("Error Occured", e);
        res.json({
            Error: e,
        });
    }
}
//controller function to readtask
function readTasks(req, res) {
    const data = TaskhandlerService.readTasks();
    res.json(data);
}
//controller function to update task
function updatedTask(req, res) {
    const id = req.params.id;
    const { body } = req;
    try {
        res.json({
            msg: TaskhandlerService.updatedTask(id, body),
        });
    }
    catch (e) {
        console.log("Error Occured", e);
        res.json({
            Error: e,
        });
    }
}
//controller function to delete task
function deleteTask(req, res) {
    const id = req.params.id;
    try {
        res.json({
            msg: TaskhandlerService.deleteTask(id),
        });
    }
    catch (e) {
        console.log("Error Occured", e);
        res.json({
            Error: e,
        });
    }
}
