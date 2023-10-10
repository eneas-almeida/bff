import { Router } from 'express';
import {
    findOneAccountByIdControllerAdapter,
    createAccountControllerAdapter,
    filterAccountsControllerAdapter,
    findOneAccountByEmailControllerAdapter,
} from '../adapters/controllers';
import { envs } from '../configs';
import { MakeAccountController } from '../factories/controllers';

export default async (router: Router): Promise<void> => {
    const makeAccountController = await MakeAccountController();

    const basePath = 'accounts';

    router.post(`/${basePath}`, createAccountControllerAdapter(makeAccountController));
    router.get(`/${basePath}`, filterAccountsControllerAdapter(makeAccountController));
    router.get(`/${basePath}/:id`, findOneAccountByIdControllerAdapter(makeAccountController));
    router.get(`/${basePath}/email/:email`, findOneAccountByEmailControllerAdapter(makeAccountController));

    const baseRoute = `${envs.api.version}/${basePath}`;

    console.log(`${basePath.toUpperCase()}`);
    console.log(`[ok] ${baseRoute} (POST)`);
    console.log(`[ok] ${baseRoute} (GET)`);
    console.log(`[ok] ${baseRoute}/:id (GET)`);
    console.log(`[ok] ${baseRoute}/email/:email (GET)`);
};
