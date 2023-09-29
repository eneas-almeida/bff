import { LoggerMapper } from '@/data/mappers';
import { LoggerRepositoryInterface } from '@/domain/@shared/contracts';
import { LoggerCreateInputDto, LoggerOutputDto } from '@/usecases/contracts';

export class CreateLoggerUseCase {
    constructor(private readonly loggerRepository: LoggerRepositoryInterface) {}

    async execute(input: LoggerCreateInputDto): Promise<LoggerOutputDto> {
        let entity = LoggerMapper.dtoToEntity(input);

        entity = await this.loggerRepository.create(entity);

        return LoggerMapper.entityToDto(entity);
    }
}
