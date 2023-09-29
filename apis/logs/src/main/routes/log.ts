import { Router } from 'express';
import {
    findOneLogByIdControllerAdapter,
    createLogControllerAdapter,
    filterLogsControllerAdapter,
} from '../adapters/controllers';
import { envs } from '../configs';
import { MakeLogControllerContainer } from '../containers/controllers';

export default async (router: Router): Promise<void> => {
    const makeLogController = await MakeLogControllerContainer();

    const basePath = 'logs';

    router.post(`/${basePath}`, createLogControllerAdapter(makeLogController));
    router.get(`/${basePath}`, filterLogsControllerAdapter(makeLogController));
    router.get(`/${basePath}/:id`, findOneLogByIdControllerAdapter(makeLogController));

    const baseRoute = `${envs.api.version}/${basePath}`;

    console.log(`${basePath.toUpperCase()}`);
    console.log(`[ok] ${baseRoute} (GET) (AUTH NO)`);
    console.log(`[ok] ${baseRoute}/:params (GET) (AUTH NO)`);
    console.log(`[ok] ${baseRoute}/:id (GET) (AUTH NO)`);
};
