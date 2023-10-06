import {
    CreateLogUseCase,
    FilterLogsUseCase,
    FindOneLogByIdUseCase,
    FindOneLogByKeyUseCase,
} from '@/usecases';
import { LogCreateInputDto, LogCustomOutputDto, LogFilterInputDto, LogOutputDto } from '@/usecases/contracts';
import { HttpResponse, LogControllerInterface } from '../contracts';
import { create, ok } from '../helpers';

export class LogController implements LogControllerInterface {
    constructor(
        private readonly createLogUseCase: CreateLogUseCase,
        private readonly filterLogsUseCase: FilterLogsUseCase,
        private readonly findOneLogByIdUseCase: FindOneLogByIdUseCase,
        private readonly findOneLogByKeyUseCase: FindOneLogByKeyUseCase
    ) {}

    async create(input: LogCreateInputDto): Promise<HttpResponse<LogCustomOutputDto<LogOutputDto>>> {
        return create(await this.createLogUseCase.execute(input));
    }

    async filter(input: LogFilterInputDto): Promise<HttpResponse<LogCustomOutputDto<LogOutputDto[]>>> {
        return ok(await this.filterLogsUseCase.execute(input));
    }

    async findOneById(id: string): Promise<HttpResponse<LogCustomOutputDto<LogOutputDto>>> {
        return ok(await this.findOneLogByIdUseCase.execute(id));
    }

    async findOneByKey(key: string): Promise<HttpResponse<LogCustomOutputDto<LogOutputDto>>> {
        return ok(await this.findOneLogByKeyUseCase.execute(key));
    }
}
