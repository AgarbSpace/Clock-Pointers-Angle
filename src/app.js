import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
import clockRouter from './router/clockRouter.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(clockRouter);
app.use(errorHandlerMiddleware);

export default app;
