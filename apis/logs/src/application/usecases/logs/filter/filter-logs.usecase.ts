import {
    FilterInputDto,
    LogsCustomOutputDto,
    LogsOutputDto,
    LogRepositoryInterface,
} from '@/application/contracts';
import { customOutputDto } from '@/application/helpers';
import { LogMapper } from '@/application/mappers';
import { AppError } from '@/main/errors';

export class FilterLogsUseCase {
    constructor(private readonly logRepository: LogRepositoryInterface) {}

    async execute(input: FilterInputDto): Promise<LogsCustomOutputDto<LogsOutputDto[]>> {
        const entities = await this.logRepository.filter(input);

        if (!entities.length) {
            throw new AppError('No logs found', 204);
        }

        const outputDtoCollection = LogMapper.entitiesToDtoCollection(entities);

        return customOutputDto(outputDtoCollection);
    }
}
