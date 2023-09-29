import { Router } from 'express';
import {
    findOneLoggerByIdControllerAdapter,
    createLoggerControllerAdapter,
    findLoggersByFilterControllerAdapter,
} from '../adapters/controllers';
import { envs } from '../configs';
import { MakeLoggerControllerContainer } from '../containers/controllers';

export default async (router: Router): Promise<void> => {
    const makeLoggerController = await MakeLoggerControllerContainer();

    const basePath = 'loggers';

    router.post(`/${basePath}`, createLoggerControllerAdapter(makeLoggerController));
    router.get(`/${basePath}`, findLoggersByFilterControllerAdapter(makeLoggerController));
    router.get(`/${basePath}/:id`, findOneLoggerByIdControllerAdapter(makeLoggerController));

    const baseRoute = `${envs.api.version}/${basePath}`;

    console.log(`${basePath.toUpperCase()}`);
    console.log(`[ok] ${baseRoute} (GET) (AUTH NO)`);
    console.log(`[ok] ${baseRoute}/:params (GET) (AUTH NO)`);
    console.log(`[ok] ${baseRoute}/:id (GET) (AUTH NO)`);
};
