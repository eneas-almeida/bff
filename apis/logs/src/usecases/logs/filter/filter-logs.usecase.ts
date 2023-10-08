import { LogMapper } from '@/data/mappers';
import { LogRepositoryInterface } from '@/domain/@shared/contracts';
import { AppError } from '@/main/errors';
import { GenericFilterInputDto } from '@/shared';
import { LogCustomOutputDto, LogOutputDto } from '@/usecases/contracts';
import { customOutputDto } from '@/usecases/helpers';

export class FilterLogsUseCase {
    constructor(private readonly logRepository: LogRepositoryInterface) {}

    async execute(input: GenericFilterInputDto): Promise<LogCustomOutputDto<LogOutputDto[]>> {
        const entities = await this.logRepository.filter(input);

        if (!entities.length) {
            throw new AppError('No logs found', 204);
        }

        const outputDtoCollection = LogMapper.entitiesToDtoCollection(entities);

        return customOutputDto(outputDtoCollection);
    }
}
