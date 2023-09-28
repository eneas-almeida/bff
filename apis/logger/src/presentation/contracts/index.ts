import { HealthzOutputDto, LoggerCreateInputDto, LoggerOutputDto } from '@/usecases/contracts';

export type HttpResponse<T = any> = {
    statusCode: number;
    body: T;
};

export interface HealthzControllerInterface {
    handle: () => Promise<HttpResponse<HealthzOutputDto>>;
}

export interface LoggerControllerInterface {
    create: (input: LoggerCreateInputDto) => Promise<HttpResponse<LoggerOutputDto>>;
    findByFilter: () => Promise<HttpResponse<LoggerOutputDto[]>>;
    findOneById: (id: string) => Promise<HttpResponse<LoggerOutputDto>>;
}
