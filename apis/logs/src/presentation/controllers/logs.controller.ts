import {
    FilterInputDto,
    LogsCreateInputDto,
    LogsCustomOutputDto,
    LogsOutputDto,
} from '@/application/contracts';
import {
    CreateLogUseCase,
    FilterLogsUseCase,
    FindOneLogByIdUseCase,
    FindOneLogByKeyUseCase,
} from '@/application/usecases/logs';
import { HttpResponse, LogControllerInterface } from '../contracts';
import { create, ok } from '../helpers';

export class LogController implements LogControllerInterface {
    constructor(
        private readonly createLogUseCase: CreateLogUseCase,
        private readonly filterLogsUseCase: FilterLogsUseCase,
        private readonly findOneLogByIdUseCase: FindOneLogByIdUseCase,
        private readonly findOneLogByKeyUseCase: FindOneLogByKeyUseCase
    ) {}

    async create(input: LogsCreateInputDto): Promise<HttpResponse<LogsCustomOutputDto<LogsOutputDto>>> {
        return create(await this.createLogUseCase.execute(input));
    }

    async filter(input: FilterInputDto): Promise<HttpResponse<LogsCustomOutputDto<LogsOutputDto[]>>> {
        return ok(await this.filterLogsUseCase.execute(input));
    }

    async findOneById(id: string): Promise<HttpResponse<LogsCustomOutputDto<LogsOutputDto>>> {
        return ok(await this.findOneLogByIdUseCase.execute(id));
    }

    async findOneByKey(key: string): Promise<HttpResponse<LogsCustomOutputDto<LogsOutputDto>>> {
        return ok(await this.findOneLogByKeyUseCase.execute(key));
    }
}
