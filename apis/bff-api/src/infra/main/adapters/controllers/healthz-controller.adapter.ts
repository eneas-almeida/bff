import { Request, Response } from 'express';
import { HealthzControllerInterface } from '@/presentation/contracts';

export const healthzGetControllerAdapter = (controller: HealthzControllerInterface) => {
    return async (_req: Request, res: Response) => {
        const httpResponse = await controller.healthz();

        console.log('akee!!!');

        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};
