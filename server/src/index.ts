import app from './app';
import env from './util/validateEnv';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const port = env.PORT;


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
