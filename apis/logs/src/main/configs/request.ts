import { Express } from 'express';
import { handleRequest } from '../middlewares';

export const requestConfig = (app: Express) => {
    app.use(handleRequest);
};
