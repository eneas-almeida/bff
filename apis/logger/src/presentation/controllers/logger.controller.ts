import { CreateLoggerUseCase, FindLoggersByFilterUseCase, FindOneLoggerByIdUseCase } from '@/usecases';
import { LoggerCreateInputDto, LoggerOutputDto } from '@/usecases/contracts';
import { HttpResponse, LoggerControllerInterface } from '../contracts';
import { create, ok } from '../helpers';

export class LoggerController implements LoggerControllerInterface {
    constructor(
        private readonly createLoggerUseCase: CreateLoggerUseCase,
        private readonly findLoggersByFilterUseCase: FindLoggersByFilterUseCase,
        private readonly findOneLoggerByIdUseCase: FindOneLoggerByIdUseCase
    ) {}

    async create(input: LoggerCreateInputDto): Promise<HttpResponse<LoggerOutputDto>> {
        return create(await this.createLoggerUseCase.execute(input));
    }

    async findByFilter(): Promise<HttpResponse<LoggerOutputDto[]>> {
        return ok(await this.findLoggersByFilterUseCase.execute());
    }

    async findOneById(id: string): Promise<HttpResponse<LoggerOutputDto>> {
        return ok(await this.findOneLoggerByIdUseCase.execute(id));
    }
}
