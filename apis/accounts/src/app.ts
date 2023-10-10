import { MainBuild } from './main';

const main = new MainBuild();

main.initBanner()
    .initEnvs()
    .initLogger()
    .initDB()
    .then((res) => {
        res.initRoutes()
            .then((res) => {
                res.initErrorMiddleware().initServer();
            })
            .catch((e) => {
                throw e;
            });
    })
    .catch((e) => {
        throw new Error(e);
    });
