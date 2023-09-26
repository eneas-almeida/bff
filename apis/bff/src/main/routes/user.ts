import { Router } from 'express';
import { MakeUserControllerContainer } from '../containers/controllers/user-controller.container';
import { envs } from '../configs';
import {
    findOneUserByEmailControllerAdapter,
    findOneUserByIdControllerAdapter,
    listUsersControllerAdapter,
} from '../adapters/controllers';

export default async (router: Router): Promise<void> => {
    const makeUserController = await MakeUserControllerContainer();

    const basePath = 'users';

    router.get(`/${basePath}/id/:id`, findOneUserByIdControllerAdapter(makeUserController));
    router.get(`/${basePath}/email/:email`, findOneUserByEmailControllerAdapter(makeUserController));
    router.get(`/${basePath}`, listUsersControllerAdapter(makeUserController));

    const baseRoute = `${envs.api.version}/${basePath}`;

    console.log(`${basePath.toUpperCase()}`);
    console.log(`[ok] ${baseRoute}/id/:id (GET) (AUTH NO)`);
    console.log(`[ok] ${baseRoute}/email/:email (GET) (AUTH NO)`);
    console.log(`[ok] ${baseRoute} (GET) (AUTH NO)`);
};
