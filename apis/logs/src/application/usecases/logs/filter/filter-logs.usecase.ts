import { LogCustomOutputDto, LogOutputDto } from '@/application/contracts';
import { customOutputDto } from '@/application/helpers';
import { LogMapper } from '@/data/mappers';
import { FilterInputDto, LogRepositoryInterface } from '@/domain/@shared/contracts';
import { AppError } from '@/main/errors';

export class FilterLogsUseCase {
    constructor(private readonly logRepository: LogRepositoryInterface) {}

    async execute(input: FilterInputDto): Promise<LogCustomOutputDto<LogOutputDto[]>> {
        const entities = await this.logRepository.filter(input);

        if (!entities.length) {
            throw new AppError('No logs found', 204);
        }

        const outputDtoCollection = LogMapper.entitiesToDtoCollection(entities);

        return customOutputDto(outputDtoCollection);
    }
}
