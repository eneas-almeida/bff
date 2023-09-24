import { Router } from 'express';
import { healthzExecuteControllerAdapter } from '../adapters/controllers';
import { envs } from '../configs';
import { MakeHealthzControllerContainer } from '../containers/controllers';

export default async (router: Router): Promise<void> => {
    const makeHealthzController = await MakeHealthzControllerContainer();

    const basePath = 'healthz';

    router.get(`/${basePath}`, healthzExecuteControllerAdapter(makeHealthzController));

    const baseRoute = `${envs.api.version}/${basePath}`;

    console.log(`${basePath.toUpperCase()}`);
    console.log(`[ok] ${baseRoute} (GET) (AUTH NO)`);
};
