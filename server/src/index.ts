import 'dotenv/config';
import env from './util/validateEnv';
import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();
const port = env.PORT;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

prisma.$connect().then(() => {
    console.log('Connected to the database');
    app.listen(port, () => {
        console.log(` Server running at http://localhost:${port}`)
    })
}
).catch(
    (error: Error) => {
        console.error(`Database connection error: ${error.message}`);
    }
)
