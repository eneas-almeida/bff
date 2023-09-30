import { HealthzOutputDto, LogCreateInputDto, LogOutputCustomDto } from '@/usecases/contracts';
import { HttpResponse } from './http';

export interface HealthzControllerInterface {
    handle: () => Promise<HttpResponse<HealthzOutputDto>>;
}

export interface LogControllerInterface {
    create: (input: LogCreateInputDto) => Promise<HttpResponse<LogOutputCustomDto>>;
    filter: () => Promise<HttpResponse<LogOutputCustomDto>>;
    findOneById: (id: string) => Promise<HttpResponse<LogOutputCustomDto>>;
}
