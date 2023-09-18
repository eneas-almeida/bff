import { Request, Response } from 'express';
import { UserControllerInterface } from '@/presentation/contracts';

const dataFindOne = (headers: any, params: any) => ({
    device: headers.device,
    id: params.id,
});

export const findOneUserControllerAdapter = (controller: UserControllerInterface) => {
    return async (req: Request, res: Response) => {
        const { device, id } = dataFindOne(req.headers, req.params);

        const httpResponse = await controller.findOne(device, id);

        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};

export const listUsersControllerAdapter = (controller: UserControllerInterface) => {
    return async (req: Request, res: Response) => {
        const { device } = req.headers;

        const httpResponse = await controller.list(device as string);

        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};
