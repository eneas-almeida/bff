import {
    app,
    bannerConfig,
    envsValidate,
    errorConfig,
    mongodbConfig,
    routesConfig,
    serverConfig,
    requestConfig,
    checkIntegrations,
} from './configs';

export class Main {
    initBanner() {
        bannerConfig();
    }

    initEnvs() {
        envsValidate();
    }

    async initCheckIntegrations() {
        await checkIntegrations();
    }

    async initDB() {
        await mongodbConfig();
    }

    initRequestMiddleware() {
        requestConfig(app);
    }

    async initRoutes() {
        await routesConfig(app);
    }

    initErrorMiddleware() {
        errorConfig(app);
    }

    initServer() {
        serverConfig(app);
    }
}
