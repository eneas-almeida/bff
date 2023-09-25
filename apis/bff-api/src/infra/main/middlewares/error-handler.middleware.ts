import { Errback, NextFunction, Request, Response } from 'express';
import { AppError, BadRequestError, IntegrationError } from '../errors';

export class ErrorHandlerMiddleware {
    handle(err: Errback, _req: Request, res: Response, _next: NextFunction) {
        if (err instanceof AppError || err instanceof BadRequestError || err instanceof IntegrationError) {
            return res.status(err.statusCode).json({
                statusCode: err.statusCode,
                message: err.message,
            });
        }

        return res.status(500).json({
            statusCode: 500,
            message: 'Internal server error, contact the administrator',
        });
    }
}
