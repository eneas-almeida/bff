import { LogMapper } from '@/data/mappers';
import { LogRepositoryInterface } from '@/domain/@shared/contracts';
import { LogOutputCustomDto } from '@/usecases/contracts';
import { outputCustomDto } from '@/usecases/helpers';

export class FilterLogsUseCase {
    constructor(private readonly logRepository: LogRepositoryInterface) {}

    async execute(): Promise<LogOutputCustomDto> {
        const entities = await this.logRepository.filter();

        const outputDtoCollection = LogMapper.entitiesToDtoCollection(entities);

        return outputCustomDto(outputDtoCollection);
    }
}
