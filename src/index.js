import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes';
import { responseHandler } from "./helpers/responseHandler";

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

app.use('/api/v1', router);

app.get('/', (req, res) => {
    responseHandler(res, 200, true, "Backend Successfully connected");
});

app.use('*', (req, res) => {
    responseHandler(res, 404, true, "Invaid Route");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Sever is running on port ${ PORT }`);
});