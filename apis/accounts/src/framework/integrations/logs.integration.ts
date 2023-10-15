import { AxiosInstance } from 'axios';
import { LogsIntegrationCreateInputDto, LogsIntegrationInterface } from './contracts';

export class LogsIntegration implements LogsIntegrationInterface {
    constructor(private readonly axios: AxiosInstance) {}

    create(input: LogsIntegrationCreateInputDto): void {
        try {
            // this.axios.post('create', input);
        } catch (err) {
            throw new Error(err);
        }
    }
}
