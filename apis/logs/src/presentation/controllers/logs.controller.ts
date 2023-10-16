import {
    FilterInputDto,
    LogsCreateInputDto,
    LogsCustomOutputDto,
    LogsOutputDto,
    LogsUseCaseInterface,
} from '@/application/contracts';
import {
    CreateLogUseCase,
    FilterLogsUseCase,
    FindOneLogByIdUseCase,
    FindOneLogByKeyUseCase,
} from '@/application/usecases/logs';
import { DeleteAllLogsUseCase } from '@/application/usecases/logs/delete-all/delete-all-logs.usecase';
import { HttpResponse, LogsControllerInterface } from '../contracts';
import { create, ok } from '../helpers';

export class LogsController implements LogsControllerInterface {
    constructor(private readonly useCases: LogsUseCaseInterface) {}

    async create(input: LogsCreateInputDto): Promise<HttpResponse<LogsCustomOutputDto<LogsOutputDto>>> {
        const output = await this.useCases.create(input);
        return create(output);
    }

    async filter(input: FilterInputDto): Promise<HttpResponse<LogsCustomOutputDto<LogsOutputDto[]>>> {
        const output = await this.useCases.filter(input);
        return ok(output);
    }

    async findOneById(id: string): Promise<HttpResponse<LogsCustomOutputDto<LogsOutputDto>>> {
        const output = await this.useCases.findOneById(id);
        return ok(output);
    }

    async findOneByKey(key: string): Promise<HttpResponse<LogsCustomOutputDto<LogsOutputDto>>> {
        const output = await this.useCases.findOneByKey(key);
        return ok(output);
    }

    async deleteAll(): Promise<HttpResponse<LogsCustomOutputDto<LogsOutputDto[]>>> {
        const output = await this.useCases.deleteAll();
        return ok(output);
    }
}
