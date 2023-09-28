import { LoggerRepositoryInterface } from '@/domain/@shared/contracts';
import { LoggerCreateInputDto, LoggerOutputDto } from '@/usecases/contracts';

export class CreateLoggerUseCase {
    constructor(private readonly loggerRepository: LoggerRepositoryInterface) {}

    async execute(input: LoggerCreateInputDto): Promise<LoggerOutputDto[]> {
        return null;
    }
}
