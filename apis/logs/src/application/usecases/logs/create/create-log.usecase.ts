import { LogCreateInputDto, LogCustomOutputDto, LogOutputDto } from '@/application/contracts';
import { customOutputDto } from '@/application/helpers';
import { LogMapper } from '@/data/mappers';
import { LogRepositoryInterface } from '@/domain/@shared/contracts';

export class CreateLogUseCase {
    constructor(private readonly logRepository: LogRepositoryInterface) {}

    async execute(input: LogCreateInputDto): Promise<LogCustomOutputDto<LogOutputDto>> {
        let entity = LogMapper.dtoToEntity(input);

        entity = await this.logRepository.create(entity);

        const outputDto = LogMapper.entityToDto(entity);

        return customOutputDto(outputDto);
    }
}
