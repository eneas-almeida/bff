import { Router } from 'express';
import {
    createAccountControllerAdapter,
    deleteAllAccountsControllerAdapter,
    filterAccountsControllerAdapter,
    findOneAccountByEmailControllerAdapter,
    findOneAccountByIdControllerAdapter,
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
    router.delete(`/${basePath}`, deleteAllAccountsControllerAdapter(makeAccountController));

    const baseRoute = `${envs.api.version}/${basePath}`;

    console.log(`${basePath.toUpperCase()}`);
    console.log(`[ok] ${baseRoute} (POST)`);
    console.log(`[ok] ${baseRoute} (GET)`);
    console.log(`[ok] ${baseRoute}/:id (GET)`);
    console.log(`[ok] ${baseRoute}/email/:email (GET)`);
    console.log(`[ok] ${baseRoute} (DELETE)`);
};
