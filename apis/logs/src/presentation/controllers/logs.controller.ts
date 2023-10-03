import {
    CreateLogUseCase,
    FilterLogsUseCase,
    FindOneLogByIdUseCase,
    FindOneLogByKeyUseCase,
} from '@/usecases';
import { LogCreateInputDto, LogCustomOutputDto, LogOutputDto } from '@/usecases/contracts';
import { HttpResponse, LogControllerInterface } from '../contracts';
import { create, ok } from '../helpers';
import { FilterInputDto } from '@/shared/filter';
import { LogOrderFilter } from '@/domain/@shared/contracts';

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

    async filter(
        input: FilterInputDto<LogOrderFilter>
    ): Promise<HttpResponse<LogCustomOutputDto<LogOutputDto[]>>> {
        return ok(await this.filterLogsUseCase.execute(input));
    }

    async findOneById(id: string): Promise<HttpResponse<LogCustomOutputDto<LogOutputDto>>> {
        return ok(await this.findOneLogByIdUseCase.execute(id));
    }

    async findOneByKey(key: string): Promise<HttpResponse<LogCustomOutputDto<LogOutputDto>>> {
        return ok(await this.findOneLogByKeyUseCase.execute(key));
    }
}
