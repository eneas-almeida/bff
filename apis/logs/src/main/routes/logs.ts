import { Router } from 'express';
import {
    findOneLogByIdControllerAdapter,
    createLogControllerAdapter,
    filterLogsControllerAdapter,
    findOneLogByKeyControllerAdapter,
} from '../adapters/controllers';
import { envs } from '../configs';
import { MakeLogController } from '../factories/controllers';

export default async (router: Router): Promise<void> => {
    const makeLogController = await MakeLogController();

    const basePath = 'logs';

    router.post(`/${basePath}`, createLogControllerAdapter(makeLogController));
    router.get(`/${basePath}`, filterLogsControllerAdapter(makeLogController));
    router.get(`/${basePath}/:id`, findOneLogByIdControllerAdapter(makeLogController));
    router.get(`/${basePath}/key/:key`, findOneLogByKeyControllerAdapter(makeLogController));

    const baseRoute = `${envs.api.version}/${basePath}`;

    console.log(`${basePath.toUpperCase()}`);
    console.log(`[ok] ${baseRoute} (POST)`);
    console.log(`[ok] ${baseRoute} (GET)`);
    console.log(`[ok] ${baseRoute}/:id (GET)`);
    console.log(`[ok] ${baseRoute}/key/:key (GET)`);
};
