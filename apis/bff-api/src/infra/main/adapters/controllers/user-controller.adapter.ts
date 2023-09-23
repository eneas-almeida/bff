import { Request, Response } from 'express';
import { UserControllerInterface } from '@/presentation/contracts';
import { Device } from '@/usecases/contracts';

const dataFindOne = (headers: any, params: any) => ({
    device: headers.device,
    id: params.id,
});

export const findOneUserByIdControllerAdapter = (controller: UserControllerInterface) => {
    return async (req: Request, res: Response) => {
        const { device, id } = dataFindOne(req.headers, req.params);

        const httpResponse = await controller.findOneById(device, id);

        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};

export const findOneUserByDocumentControllerAdapter = (controller: UserControllerInterface) => {
    return async (req: Request, res: Response) => {
        const { device, id } = dataFindOne(req.headers, req.params);

        const httpResponse = await controller.findOneByDocument(device, id);

        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};

export const listUsersControllerAdapter = (controller: UserControllerInterface) => {
    return async (req: Request, res: Response) => {
        const { device } = req.headers;

        const httpResponse = await controller.list(device as Device);

        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};
