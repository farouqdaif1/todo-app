import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import userRoutes from "./routes/user";
import todosRoutes from "./routes/todos";

const app = express();
app.use(cors());

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/todlist", todosRoutes);



export default app;