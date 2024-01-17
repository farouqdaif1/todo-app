import 'dotenv/config';
import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
app.use(express.json());
app.get('/', async (req, res) => { 
    const users = await prisma.user.findMany();
    res.status(200).json(users);
});
export default app;