import { Router } from 'express';
import { healthzExecuteControllerAdapter } from '../adapters/controllers';
import { envs } from '../configs';
import { MakeHealthzController } from '../factories/controllers';

export default async (router: Router): Promise<void> => {
    const makeHealthzController = await MakeHealthzController();

    const basePath = 'healthz';

    router.get(`/${basePath}`, healthzExecuteControllerAdapter(makeHealthzController));

    const baseRoute = `${envs.api.version}/${basePath}`;

    console.log(`${basePath.toUpperCase()}`);
    console.log(`[ok] ${baseRoute} (GET) (AUTH NO)`);
};
