import { Request, Response } from 'express';
import { LogControllerInterface } from '@/presentation/contracts';

export const createLogControllerAdapter = (controller: LogControllerInterface) => {
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

export const filterLogsControllerAdapter = (controller: LogControllerInterface) => {
    return async (_req: Request, res: Response) => {
        const httpResponse = await controller.filter();

        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};

export const findOneLogByIdControllerAdapter = (controller: LogControllerInterface) => {
    return async (req: Request, res: Response) => {
        const { id } = req.params;

        const httpResponse = await controller.findOneById(id);

        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};

export const findOneLogByKeyControllerAdapter = (controller: LogControllerInterface) => {
    return async (req: Request, res: Response) => {
        const { key } = req.params;

        const httpResponse = await controller.findOneByKey(key);

        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};
