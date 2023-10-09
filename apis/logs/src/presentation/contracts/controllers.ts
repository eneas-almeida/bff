import {
    HealthzOutputDto,
    LogCreateInputDto,
    LogCustomOutputDto,
    LogOutputDto,
} from '@/application/contracts';
import { FilterInputDto } from '@/domain/@shared/contracts';
import { HttpResponse } from './http';

export interface HealthzControllerInterface {
    handle: () => Promise<HttpResponse<HealthzOutputDto>>;
}

export interface LogControllerInterface {
    create: (input: LogCreateInputDto) => Promise<HttpResponse<LogCustomOutputDto<LogOutputDto>>>;
    filter: (input: FilterInputDto) => Promise<HttpResponse<LogCustomOutputDto<LogOutputDto[]>>>;
    findOneById: (id: string) => Promise<HttpResponse<LogCustomOutputDto<LogOutputDto>>>;
    findOneByKey: (key: string) => Promise<HttpResponse<LogCustomOutputDto<LogOutputDto>>>;
}
