import { Router } from 'express';
import {
    findAllUsersControllerAdapter,
    findOneUserByEmailControllerAdapter,
    findOneUserByIdControllerAdapter,
} from '../adapters/controllers';
import { envs } from '../configs';
import { MakeUserControllerContainer } from '../containers/controllers';

export default async (router: Router): Promise<void> => {
    const makeUserController = await MakeUserControllerContainer();

    const basePath = 'users';

    router.get(`/${basePath}`, findAllUsersControllerAdapter(makeUserController));
    router.get(`/${basePath}/email/:email`, findOneUserByEmailControllerAdapter(makeUserController));
    router.get(`/${basePath}/id/:id`, findOneUserByIdControllerAdapter(makeUserController));

    const baseRoute = `${envs.api.version}/${basePath}`;

    console.log(`${basePath.toUpperCase()}`);
    console.log(`[ok] ${baseRoute} (GET) (AUTH NO)`);
    console.log(`[ok] ${baseRoute}/email/:email (GET) (AUTH NO)`);
    console.log(`[ok] ${baseRoute}/id/:id (GET) (AUTH NO)`);
};
