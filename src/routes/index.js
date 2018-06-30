import app from '../config/express';
import mainApiRouter from './main/index.js';

app.use('/', mainApiRouter);

export default app;
