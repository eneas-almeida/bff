import {
    HealthzOutputDto,
    LogCreateInputDto,
    LogCustomOutputDto,
    LogFilterInputDto,
    LogOutputDto,
} from '@/usecases/contracts';
import { HttpResponse } from './http';

export interface HealthzControllerInterface {
    handle: () => Promise<HttpResponse<HealthzOutputDto>>;
}

export interface LogControllerInterface {
    create: (input: LogCreateInputDto) => Promise<HttpResponse<LogCustomOutputDto<LogOutputDto>>>;
    filter: (input: LogFilterInputDto) => Promise<HttpResponse<LogCustomOutputDto<LogOutputDto[]>>>;
    findOneById: (id: string) => Promise<HttpResponse<LogCustomOutputDto<LogOutputDto>>>;
    findOneByKey: (key: string) => Promise<HttpResponse<LogCustomOutputDto<LogOutputDto>>>;
}
