import { LoggerRepositoryInterface } from '@/domain/@shared/contracts';
import { LoggerOutputDto } from '@/usecases/contracts';

export class FindLoggersByFilterUseCase {
    constructor(private readonly loggerRepository: LoggerRepositoryInterface) {}

    async execute(): Promise<LoggerOutputDto[]> {
        return null;
    }
}
