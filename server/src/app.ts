import 'dotenv/config';
import express from 'express';
import userRoutes from "./routes/user";

const app = express();
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/todList", userRoutes);



export default app;