import { Request, Response } from 'express';
import { AccountControllerInterface } from '@/presentation/contracts';
import { buildCustomFilter } from '@/main/helpers';

export const createAccountControllerAdapter = (controller: AccountControllerInterface) => {
    return async (req: Request, res: Response) => {
        const httpResponse = await controller.create(req.body);

        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};

export const filterAccountsControllerAdapter = (controller: AccountControllerInterface) => {
    return async (req: Request, res: Response) => {
        const input = buildCustomFilter(req.query);

        const httpResponse = await controller.filter(input);

        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};

export const findOneAccountByIdControllerAdapter = (controller: AccountControllerInterface) => {
    return async (req: Request, res: Response) => {
        const { id } = req.params;

        const httpResponse = await controller.findOneById(id);

        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};

export const findOneAccountByEmailControllerAdapter = (controller: AccountControllerInterface) => {
    return async (req: Request, res: Response) => {
        const { email } = req.params;

        const httpResponse = await controller.findOneByEmail(email);

        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};
