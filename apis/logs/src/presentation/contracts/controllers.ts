import {
    FilterInputDto,
    HealthzOutputDto,
    LogsCreateInputDto,
    LogsCustomOutputDto,
    LogsOutputDto,
} from '@/application/contracts';
import { HttpResponse } from './http';

export interface HealthzControllerInterface {
    handle: () => Promise<HttpResponse<HealthzOutputDto>>;
}

export interface LogControllerInterface {
    create: (input: LogsCreateInputDto) => Promise<HttpResponse<LogsCustomOutputDto<LogsOutputDto>>>;
    filter: (input: FilterInputDto) => Promise<HttpResponse<LogsCustomOutputDto<LogsOutputDto[]>>>;
    findOneById: (id: string) => Promise<HttpResponse<LogsCustomOutputDto<LogsOutputDto>>>;
    findOneByKey: (key: string) => Promise<HttpResponse<LogsCustomOutputDto<LogsOutputDto>>>;
}
