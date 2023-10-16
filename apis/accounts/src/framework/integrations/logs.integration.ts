import { AxiosInstance } from 'axios';
import { LogsIntegrationCreateInputDto, LogsIntegrationInterface } from './contracts';
import { logsBaseUrl } from './helpers';

export class LogsIntegration implements LogsIntegrationInterface {
    constructor(private readonly axios: AxiosInstance) {}

    async healthz(): Promise<any> {
        try {
            return await this.axios.get(logsBaseUrl() + '/healthz');
        } catch (err) {
            throw new Error(err);
        }
    }

    create(input: LogsIntegrationCreateInputDto): void {
        try {
            this.axios.post(logsBaseUrl() + '/logs', input);
        } catch (err) {
            throw new Error(err);
        }
    }
}
