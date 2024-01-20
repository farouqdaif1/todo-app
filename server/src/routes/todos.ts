import express from "express";
import * as TodoController from "../Controllers/TodoList";
import auth from "../middleware/auth";
const router = express.Router();


router.post("/create-todo",auth, TodoController.createTodo);
router.get("/all" ,TodoController.getTodos);
router.delete("/:id", auth,TodoController.deleteTodo);


export default router;