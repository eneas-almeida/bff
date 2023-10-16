import {
    LogsCreateInputDto,
    LogsCustomOutputDto,
    LogsOutputDto,
    LogsRepositoryInterface,
} from '@/application/contracts';
import { customOutputDto } from '@/application/helpers';
import { LogsMapper } from '@/application/mappers';

export class CreateLogUseCase {
    constructor(private readonly logsRepository: LogsRepositoryInterface) {}

    async execute(input: LogsCreateInputDto): Promise<LogsCustomOutputDto<LogsOutputDto>> {
        let entity = LogsMapper.inputDtoToEntity(input);

        entity = await this.logsRepository.create(entity);

        const outputDto = LogsMapper.entityToOutputDto(entity);

        return customOutputDto(outputDto);
    }
}
