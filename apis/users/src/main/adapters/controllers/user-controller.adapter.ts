import { Request, Response } from 'express';
import { UserControllerInterface } from '@/presentation/contracts';

export const findAllUsersControllerAdapter = (controller: UserControllerInterface) => {
    return async (_req: Request, res: Response) => {
        const httpResponse = await controller.findAll();

        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};

export const findOneUserByEmailControllerAdapter = (controller: UserControllerInterface) => {
    return async (req: Request, res: Response) => {
        const { email } = req.params;

        const httpResponse = await controller.findOneByEmail(email);

        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};

export const findOneUserByIdControllerAdapter = (controller: UserControllerInterface) => {
    return async (req: Request, res: Response) => {
        const { id } = req.params;

        const httpResponse = await controller.findOneById(Number(id));

        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};
