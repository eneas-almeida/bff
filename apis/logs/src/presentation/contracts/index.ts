import { HealthzOutputDto, LogCreateInputDto, LogOutputDto } from '@/usecases/contracts';

export type HttpResponse<T = any> = {
    statusCode: number;
    body: T;
};

export interface HealthzControllerInterface {
    handle: () => Promise<HttpResponse<HealthzOutputDto>>;
}

export interface LogControllerInterface {
    create: (input: LogCreateInputDto) => Promise<HttpResponse<LogOutputDto>>;
    filter: () => Promise<HttpResponse<LogOutputDto[]>>;
    findOneById: (id: string) => Promise<HttpResponse<LogOutputDto>>;
}
