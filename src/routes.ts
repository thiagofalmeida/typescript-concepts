import { Request, Response } from 'express';

export function welcome(request: Request, response: Response) {
    return response.json({ message: 'Welcome Typescript!' })
}