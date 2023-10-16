export interface LogsIntegrationCreateInputDto {
    origin: string;
    key: string;
    type: string;
    code?: string;
    request: string;
    response: string;
}

export interface LogsIntegrationInterface {
    healthz(): Promise<any>;
    create(input: LogsIntegrationCreateInputDto): void;
}
