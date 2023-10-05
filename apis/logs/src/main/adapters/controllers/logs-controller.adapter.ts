import { Request, Response } from 'express';
import { LogControllerInterface } from '@/presentation/contracts';
import { queryBuild } from '@/main/helpers';

export const createLogControllerAdapter = (controller: LogControllerInterface) => {
    return async (req: Request, res: Response) => {
        const httpResponse = await controller.create(req.body);

        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};

export const filterLogsControllerAdapter = (controller: LogControllerInterface) => {
    return async (req: Request, res: Response) => {
        console.log(queryBuild(req.query));
        const httpResponse = await controller.filter(queryBuild(req.query));

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
