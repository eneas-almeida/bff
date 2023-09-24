import { UserControllerInterface } from '@/presentation/contracts';
import { Request, Response } from 'express';
import { dataFindOneByEmail, dataFindOneById, dataList } from '../../helpers';

export const findOneUserByIdControllerAdapter = (controller: UserControllerInterface) => {
    return async (req: Request, res: Response) => {
        const { device, id } = dataFindOneById(req.headers, req.params);

        const httpResponse = await controller.findOneById(device, id);

        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};

export const findOneUserByEmailControllerAdapter = (controller: UserControllerInterface) => {
    return async (req: Request, res: Response) => {
        const { device, document } = dataFindOneByEmail(req.headers, req.params);

        const httpResponse = await controller.findOneByEmail(device, document);

        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};

export const listUsersControllerAdapter = (controller: UserControllerInterface) => {
    return async (req: Request, res: Response) => {
        const { device } = dataList(req.headers);

        const httpResponse = await controller.list(device);

        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};
