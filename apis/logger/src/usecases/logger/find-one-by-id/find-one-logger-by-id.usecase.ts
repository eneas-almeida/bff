import { LoggerRepositoryInterface } from '@/domain/@shared/contracts';
import { LoggerOutputDto } from '@/usecases/contracts';

export class FindOneLoggerByIdUseCase {
    constructor(private readonly loggerRepository: LoggerRepositoryInterface) {}

    async execute(id: string): Promise<LoggerOutputDto> {
        return null;
    }
}
