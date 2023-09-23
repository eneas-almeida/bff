import { Router } from 'express';
import { MakeUserController } from '../containers/user-controller.container';
import { envs } from '../configs';
import {
    findOneUserByDocumentControllerAdapter,
    findOneUserByIdControllerAdapter,
    listUsersControllerAdapter,
} from '../adapters/controllers';

export default async (router: Router): Promise<void> => {
    const makeUserController = await MakeUserController();

    const basePath = 'users';

    router.get(`/${basePath}/id/:id`, findOneUserByIdControllerAdapter(makeUserController));
    router.get(`/${basePath}/document/:document`, findOneUserByDocumentControllerAdapter(makeUserController));
    router.get(`/${basePath}`, listUsersControllerAdapter(makeUserController));

    const baseRoute = `${envs.api.version}/${basePath}`;

    console.log(`${basePath.toUpperCase()}`);
    console.log(`[ok] ${baseRoute}/id/:id (GET) (AUTH NO)`);
    console.log(`[ok] ${baseRoute}/document/:document (GET) (AUTH NO)`);
    console.log(`[ok] ${baseRoute} (GET) (AUTH NO)`);
};
