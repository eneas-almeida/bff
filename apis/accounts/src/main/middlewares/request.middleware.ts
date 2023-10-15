import { Express, NextFunction, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

export const handleRequest = async (app: Express) => {
    app.use((req: Request, _res: Response, next: NextFunction) => {
        req.xRequest = uuidv4();
        next();
    });
};
