import app from '../config/express';
import apiRouter from './main/index.js';
import publicRouter from './public/index.js'
import authRouter from '../modules/auth/index';

app.use('/api', apiRouter);
app.use('/auth', authRouter);
app.use('/*', publicRouter);

export default app;
