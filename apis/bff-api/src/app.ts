import { MainBuild } from './infra/main';

const mainBuild = new MainBuild();

mainBuild
    .initBanner()
    .initEnvs()
    .initLogger()
    .initRoutes()
    .then((res) => res.initErrorHandler().initServer())
    .catch((e) => {
        throw new Error(e);
    });
