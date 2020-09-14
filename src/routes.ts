import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function welcome(request: Request, response: Response) {
    const user = createUser({
        name: 'Thiago', 
        email: 'thiagofalmd@gmail.com', 
        password: '123',
        techs: [
            'Node.js', 
            'PHP', 
            'React',
            { title: 'Javascript', experience: 100 }
        ]
    });

    return response.json({ message: 'Welcome Typescript!' })
}