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

export class MainBuild {
    initBanner() {
        bannerConfig();
        return this;
    }

    initEnvs() {
        envsValidate();
        return this;
    }

    async initCheckIntegrations() {
        await checkIntegrations();
        return this;
    }

    async initDB() {
        await mongodbConfig();
        return this;
    }

    initRequestMiddleware() {
        requestConfig(app);
        return this;
    }

    async initRoutes() {
        await routesConfig(app);
        return this;
    }

    initErrorMiddleware() {
        errorConfig(app);
        return this;
    }

    initServer() {
        serverConfig(app);
        return this;
    }
}
