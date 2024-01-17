import { RequestHandler } from "express";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const createTodo: RequestHandler = async (req, res) => { 

};
const getTodos: RequestHandler = async (req, res) => { 
    const userId = req.body.userId;
};
const deleteTodo : RequestHandler= async (req, res) => { 

}
export { createTodo, getTodos, deleteTodo };