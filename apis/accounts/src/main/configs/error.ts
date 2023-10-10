import { Express } from 'express';
import { handleError } from '../middlewares';

export const errorConfig = (app: Express) => {
    app.use(handleError);
};
