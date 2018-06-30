import express from 'express';
import morgan from 'morgan';
import boom from 'express-boom';

const app = express();

app.use(morgan('combined'));
app.use(boom());

export default app;
