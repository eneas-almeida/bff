import { Request, Response } from 'express';
import { LogsControllerInterface } from '@/presentation/contracts';
import { buildCustomFilter } from '@/main/helpers';

export const createLogControllerAdapter = (controller: LogsControllerInterface) => {
    return async (req: Request, res: Response) => {
        const httpResponse = await controller.create(req.body);

        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};

export const filterLogsControllerAdapter = (controller: LogsControllerInterface) => {
    return async (req: Request, res: Response) => {
        const input = buildCustomFilter(req.query);

        const httpResponse = await controller.filter(input);

        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};

export const findOneLogByIdControllerAdapter = (controller: LogsControllerInterface) => {
    return async (req: Request, res: Response) => {
        const { id } = req.params;

        const httpResponse = await controller.findOneById(id);

        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};

export const findOneLogByKeyControllerAdapter = (controller: LogsControllerInterface) => {
    return async (req: Request, res: Response) => {
        const { key } = req.params;

        const httpResponse = await controller.findOneByKey(key);

        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};

export const deleteAllLogsControllerAdapter = (controller: LogsControllerInterface) => {
    return async (_req: Request, res: Response) => {
        const httpResponse = await controller.deleteAll();

        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};
