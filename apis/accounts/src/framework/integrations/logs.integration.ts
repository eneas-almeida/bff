import { AxiosInstance } from 'axios';
import {
    LogsIntegrationCreateInputDto,
    LogsIntegrationInterface,
    LogsIntegrationOutputDto,
} from './contracts';
import { FilterInputDto } from '@/application/contracts';

export class LogsIntegration implements LogsIntegrationInterface {
    constructor(private readonly axios: AxiosInstance) {}

    async create(input: LogsIntegrationCreateInputDto): Promise<LogsIntegrationOutputDto> {
        throw new Error('Method not implemented.');
    }

    async filter(input: FilterInputDto): Promise<LogsIntegrationOutputDto[]> {
        throw new Error('Method not implemented.');
    }

    async findOneById(id: string): Promise<LogsIntegrationOutputDto> {
        throw new Error('Method not implemented.');
    }

    async findOneByKey(key: string): Promise<LogsIntegrationOutputDto> {
        throw new Error('Method not implemented.');
    }
}
