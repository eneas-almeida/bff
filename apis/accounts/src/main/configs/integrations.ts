import { LogsIntegration } from '@/framework/integrations';
import { AxiosHttpClient } from '@/infra/httpclients';

export const checkIntegrations = async () => {
    try {
        const httpClient = new AxiosHttpClient().getInstance();

        const logsIntegration = new LogsIntegration(httpClient);

        const output = await logsIntegration.healthz();

        if (output.status !== 200) {
            throw new Error('Logs integration is not available');
        }
    } catch (err) {
        throw new Error(err);
    }
};
