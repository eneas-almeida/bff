import {
    LogsCreateInputDto,
    LogsCustomOutputDto,
    LogsOutputDto,
    LogRepositoryInterface,
} from '@/application/contracts';
import { customOutputDto } from '@/application/helpers';
import { LogsMapper } from '@/application/mappers';

export class CreateLogUseCase {
    constructor(private readonly logRepository: LogRepositoryInterface) {}

    async execute(input: LogsCreateInputDto): Promise<LogsCustomOutputDto<LogsOutputDto>> {
        let entity = LogsMapper.dtoToEntity(input);

        entity = await this.logRepository.create(entity);

        const outputDto = LogsMapper.entityToDto(entity);

        return customOutputDto(outputDto);
    }
}
