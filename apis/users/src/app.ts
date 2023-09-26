import { MainBuild } from './main';

const main = new MainBuild();

main.initBanner()
    .initEnvs()
    .initLogger()
    .initRoutes()
    .then((res) => res.initErrorHandler().initServer())
    .catch((e) => {
        throw new Error(e);
    });
