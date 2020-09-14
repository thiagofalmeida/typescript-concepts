import express, { request } from 'express';

const app = express();

app.get('/', (request, response) => {
    return response.json({ message: 'Welcome Typescript!' })
});

app.listen(3333);