import { HealthzOutputDto, LogCreateInputDto, LogOutputCustomDto, LogOutputDto } from '@/usecases/contracts';
import { HttpResponse } from './http';

export interface HealthzControllerInterface {
    handle: () => Promise<HttpResponse<HealthzOutputDto>>;
}

export interface LogControllerInterface {
    create: (input: LogCreateInputDto) => Promise<HttpResponse<LogOutputCustomDto<LogOutputDto>>>;
    filter: () => Promise<HttpResponse<LogOutputCustomDto<LogOutputDto[]>>>;
    findOneById: (id: string) => Promise<HttpResponse<LogOutputCustomDto<LogOutputDto>>>;
    findOneByKey: (key: string) => Promise<HttpResponse<LogOutputCustomDto<LogOutputDto>>>;
}
