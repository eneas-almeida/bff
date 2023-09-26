import { Express } from 'express';
import { ErrorHandlerMiddleware } from '../middlewares';

export const errorConfig = (app: Express) => {
    const error = new ErrorHandlerMiddleware();
    app.use(error.handle);
};
