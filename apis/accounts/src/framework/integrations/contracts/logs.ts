import { FilterInputDto } from '@/application/contracts';

export interface LogsIntegrationCreateInputDto {
    origin: string;
    key: string;
    type: string;
    code?: string;
    request: string;
    response: string;
}

export interface LogsIntegrationOutputDto {
    id: string;
    origin: string;
    key: string;
    type: string;
    code?: string;
    request: string;
    response: string;
    createdAt: Date;
}

export interface LogsIntegrationInterface {
    create(input: LogsIntegrationCreateInputDto): Promise<LogsIntegrationOutputDto>;
    filter(input: FilterInputDto): Promise<LogsIntegrationOutputDto[]>;
    findOneById(id: string): Promise<LogsIntegrationOutputDto | null>;
    findOneByKey(key: string): Promise<LogsIntegrationOutputDto | null>;
}
