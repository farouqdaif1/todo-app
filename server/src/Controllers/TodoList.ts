import { RequestHandler } from "express";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const createTodo: RequestHandler = async (req, res) => {
    const { title, completed, userId } = req.body;
    try {
        const todo = await prisma.todo.create({
            data: {
                title,
                completed,
                userId
            }
        });
        res.status(201).json({ message: 'Todo created successfully', todo });
    } catch (error) {
        res.status(500).json({ message: "someThing went wrong", error });
    }
};
const getTodos: RequestHandler = async (req, res) => {
    const userId = req.params.id;
    try {
        const todos = await prisma.todo.findMany({
            where: {
                userId
            }
        });
        res.status(200).json({ message: 'Todos fetched successfully', todos });
    } catch (error) {
        res.status(500).json({ message: "someThing went wrong", error });
    }
};
const deleteTodo: RequestHandler = async (req, res) => {
    const id = req.params.id;
    try {
        const todo = await prisma.todo.delete({
            where: {
                id
            }
        });
        res.status(200).json({ message: 'Todo deleted successfully', todo });
    } catch (error) {
        res.status(500).json({ message: "someThing went wrong", error });
    }
}
export { createTodo, getTodos, deleteTodo };