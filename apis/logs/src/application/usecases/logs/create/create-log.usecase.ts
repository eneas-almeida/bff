import {
    LogsCreateInputDto,
    LogsCustomOutputDto,
    LogsOutputDto,
    LogRepositoryInterface,
} from '@/application/contracts';
import { customOutputDto } from '@/application/helpers';
import { LogMapper } from '@/application/mappers';

export class CreateLogUseCase {
    constructor(private readonly logRepository: LogRepositoryInterface) {}

    async execute(input: LogsCreateInputDto): Promise<LogsCustomOutputDto<LogsOutputDto>> {
        let entity = LogMapper.dtoToEntity(input);

        entity = await this.logRepository.create(entity);

        const outputDto = LogMapper.entityToDto(entity);

        return customOutputDto(outputDto);
    }
}
