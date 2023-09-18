import { Errback, NextFunction, Request, Response } from 'express';
import { AppError, ServerError } from '../errors';

export class ErrorHandlerMiddleware {
    handle(e: Errback, _req: Request, res: Response, _next: NextFunction) {
        if (e instanceof AppError) {
            return res.status(e.statusCode).json({
                statusCode: e.statusCode,
                message: e.message,
            });
        }

        if (e instanceof ServerError) {
            return res.status(e.statusCode).json({
                statusCode: e.statusCode,
                message: e.message,
            });
        }

        return res.status(500).json({
            statusCode: 500,
            message: 'Internal server error, contact the administrator',
            description: e.name,
        });
    }
}
