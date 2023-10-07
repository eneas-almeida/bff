import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';

export const handleRequest = (req: Request, _res: Response, next: NextFunction) => {
    req.xRequest = uuidv4();

    next();
};
