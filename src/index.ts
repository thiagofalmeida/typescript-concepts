import express, { request } from 'express';
import { welcome } from './routes';

const app = express();

app.get('/', welcome);

app.listen(3333);