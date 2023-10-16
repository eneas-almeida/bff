import { Main } from './main';

const main = new Main();

const initializeApp = async () => {
    try {
        main.initBanner();
        main.initEnvs();
        await main.initCheckIntegrations();
        await main.initDB();
        main.initRequestMiddleware();
        await main.initRoutes();
        main.initErrorMiddleware();
        main.initServer();
    } catch (err) {
        throw new Error(err);
    }
};

initializeApp();
