export interface LogsIntegrationCreateInputDto {
    origin: string;
    key: string;
    type: string;
    code?: string;
    request: string;
    response: string;
}

export interface LogsIntegrationInterface {
    create(input: LogsIntegrationCreateInputDto): void;
}
