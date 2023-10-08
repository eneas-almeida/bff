import { HealthzOutputDto, LogCreateInputDto, LogCustomOutputDto, LogOutputDto } from '@/usecases/contracts';
import { HttpResponse } from './http';
import { GenericFilterInputDto } from '@/shared';

export interface HealthzControllerInterface {
    handle: () => Promise<HttpResponse<HealthzOutputDto>>;
}

export interface LogControllerInterface {
    create: (input: LogCreateInputDto) => Promise<HttpResponse<LogCustomOutputDto<LogOutputDto>>>;
    filter: (input: GenericFilterInputDto) => Promise<HttpResponse<LogCustomOutputDto<LogOutputDto[]>>>;
    findOneById: (id: string) => Promise<HttpResponse<LogCustomOutputDto<LogOutputDto>>>;
    findOneByKey: (key: string) => Promise<HttpResponse<LogCustomOutputDto<LogOutputDto>>>;
}
