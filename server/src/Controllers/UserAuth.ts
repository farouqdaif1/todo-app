import { PrismaClient } from '@prisma/client';
import { RequestHandler } from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import env from '../util/validateEnv';

const prisma = new PrismaClient();
//sign up
const signUp: RequestHandler = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        if (!username || !password || !email) {
            return res.status(400).json({ message: 'Parameters missing' });
        }
        const takenUserName = await prisma.user.findFirst({ where: { username: username } });
        const takenEmail = await prisma.user.findFirst({ where: { email: email } });
        if (takenUserName) {
            return res.status(400).json({ message: 'Username already taken' });
        }
        if (takenEmail) {
            return res.status(400).json({ message: 'Email already taken' });
        }
        const passwordHashed = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({ data: { username: username, email: email, password: passwordHashed } });
        const token = jwt.sign({ id: newUser.id, email: newUser.email }, env.JWT_SECRET);
        res.status(201).json({ message: 'User created successfully', newUser, token });
    } catch (error) {
        res.status(200).json({ message: 'cant create user', error });
    }
}

//sign in
const signIn: RequestHandler = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(400).json({ message: 'Parameters missing' });
        }
        const foundUser = await prisma.user.findFirst({ where: { email: email } });
        if (!foundUser) {
            return res.status(400).json({ message: 'Username  incorrect' });
        }
        const isPasswordCorrect = await bcrypt.compare(password, foundUser.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: 'password incorrect' });
        }
        const token = jwt.sign({ id: foundUser.id, email: foundUser.email }, env.JWT_SECRET);
        res.status(200).json({ message: 'User logged in successfully', token, foundUser });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
}


export { signUp, signIn };
