import 'dotenv/config';
import env from './util/validateEnv';
import express from 'express';
// import mongoose from 'mongoose';

const app = express();


app.get('/', (req, res) => {
    res.send('Hello World!')
})
const port = env.PORT;

app.listen(port, () => {
    console.log(` Server running at http://localhost:${port}`)
})