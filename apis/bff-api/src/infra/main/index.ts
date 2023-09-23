import {
    app,
    bannerConfig,
    envsValidate,
    routesConfig,
    errorConfig,
    serverConfig,
} from '@/infra/main/configs';

export class MainBuild {
    initBanner() {
        bannerConfig();
        return this;
    }

    initEnvs() {
        envsValidate();
        return this;
    }

    initLogger() {
        return this;
    }

    async initRoutes() {
        await routesConfig(app);
        return this;
    }

    initErrorHandler() {
        errorConfig(app);
        return this;
    }

    initServer() {
        serverConfig(app);
        return app;
    }
}
