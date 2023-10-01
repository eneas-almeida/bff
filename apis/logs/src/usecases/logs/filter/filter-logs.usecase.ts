import { LogMapper } from '@/data/mappers';
import { LogRepositoryInterface } from '@/domain/@shared/contracts';
import { LogOutputCustomDto, LogOutputDto } from '@/usecases/contracts';
import { outputCustomDto } from '@/usecases/helpers';

export class FilterLogsUseCase {
    constructor(private readonly logRepository: LogRepositoryInterface) {}

    async execute(): Promise<LogOutputCustomDto<LogOutputDto[]>> {
        const entities = await this.logRepository.filter();

        const outputDtoCollection = LogMapper.entitiesToDtoCollection(entities);

        return outputCustomDto(outputDtoCollection);
    }
}
