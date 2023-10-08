import { LogMapper } from '@/data/mappers';
import { LogRepositoryInterface } from '@/domain/@shared/contracts';
import { LogCreateInputDto, LogCustomOutputDto, LogOutputDto } from '@/usecases/contracts';
import { customOutputDto } from '@/usecases/helpers';

export class CreateLogUseCase {
    constructor(private readonly logRepository: LogRepositoryInterface) {}

    async execute(input: LogCreateInputDto): Promise<LogCustomOutputDto<LogOutputDto>> {
        let entity = LogMapper.dtoToEntity(input);

        entity = await this.logRepository.create(entity);

        const outputDto = LogMapper.entityToDto(entity);

        return customOutputDto(outputDto);
    }
}
