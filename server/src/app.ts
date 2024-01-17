import 'dotenv/config';
import express from 'express';
import { SignUp, SignIn } from './Controllers/UserAuth';
const app = express();
app.use(express.json());
app.post('/signIn', SignIn);
app.post('/signUp', SignUp);

export default app;