import {
    FilterInputDto,
    LogsCustomOutputDto,
    LogsOutputDto,
    LogsRepositoryInterface,
} from '@/application/contracts';
import { customOutputDto } from '@/application/helpers';
import { LogsMapper } from '@/application/mappers';
import { AppError } from '@/main/errors';

export class FilterLogsUseCase {
    constructor(private readonly logsRepository: LogsRepositoryInterface) {}

    async execute(input: FilterInputDto): Promise<LogsCustomOutputDto<LogsOutputDto[]>> {
        const entities = await this.logsRepository.filter(input);

        if (!entities.length) {
            throw new AppError('No logs found', 204);
        }

        const outputDtoCollection = LogsMapper.entitiesToOutputDtoCollection(entities);

        return customOutputDto(outputDtoCollection);
    }
}
