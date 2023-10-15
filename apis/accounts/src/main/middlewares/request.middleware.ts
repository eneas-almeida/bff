import { NextFunction, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

export const handleRequest = async (req: Request, _res: Response, next: NextFunction) => {
    req.headers.key = uuidv4();
    next();
};
