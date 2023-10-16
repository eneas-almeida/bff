import { LogsCustomOutputDto, LogsOutputDto, LogsRepositoryInterface } from '@/application/contracts';
import { customOutputDto } from '@/application/helpers';
import { LogsMapper } from '@/application/mappers';

export class FindOneLogByKeyUseCase {
    constructor(private readonly logsRepository: LogsRepositoryInterface) {}

    async execute(key: string): Promise<LogsCustomOutputDto<LogsOutputDto>> {
        const entity = await this.logsRepository.findOneByKey(key);

        if (!entity) {
            throw new Error('Log not found');
        }

        const outputDto = LogsMapper.entityToOutputDto(entity);

        return customOutputDto(outputDto);
    }
}
