import { AxiosInstance } from 'axios';
import { LogsIntegrationCreateInputDto, LogsIntegrationInterface } from './contracts';
import { getEndpoint } from './helpers';

export class LogsIntegration implements LogsIntegrationInterface {
    constructor(private readonly axios: AxiosInstance) {}

    create(input: LogsIntegrationCreateInputDto): void {
        try {
            this.axios.post(getEndpoint(), input);
        } catch (err) {
            throw new Error(err);
        }
    }
}
