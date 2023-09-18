import { MainBuild } from './infra/main';

const mainBuild = new MainBuild();

mainBuild.initBanner().initEnvs().initLogger().initRoutes().initErrorHandler().initServer();
