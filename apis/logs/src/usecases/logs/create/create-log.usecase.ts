import { LogMapper } from '@/data/mappers';
import { LogRepositoryInterface } from '@/domain/@shared/contracts';
import { LogCreateInputDto, LogOutputCustomDto, LogOutputDto } from '@/usecases/contracts';
import { outputCustomDto } from '@/usecases/helpers';

export class CreateLogUseCase {
    constructor(private readonly logRepository: LogRepositoryInterface) {}

    async execute(input: LogCreateInputDto): Promise<LogOutputCustomDto<LogOutputDto>> {
        let entity = LogMapper.dtoToEntity(input);

        entity = await this.logRepository.create(entity);

        const outputDto = LogMapper.entityToDto(entity);

        return outputCustomDto(outputDto);
    }
}
