import { Request, Response } from 'express';
import { LoggerControllerInterface } from '@/presentation/contracts';

export const createLoggerControllerAdapter = (controller: LoggerControllerInterface) => {
    return async (_req: Request, res: Response) => {
        const data = {
            ..._req.body,
            ..._req.params,
            ..._req.query,
        };

        const httpResponse = await controller.create(data);

        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};

export const findLoggersByFilterControllerAdapter = (controller: LoggerControllerInterface) => {
    return async (_req: Request, res: Response) => {
        const httpResponse = await controller.findByFilter();

        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};

export const findOneLoggerByIdControllerAdapter = (controller: LoggerControllerInterface) => {
    return async (req: Request, res: Response) => {
        const { id } = req.params;

        const httpResponse = await controller.findOneById(id);

        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};
