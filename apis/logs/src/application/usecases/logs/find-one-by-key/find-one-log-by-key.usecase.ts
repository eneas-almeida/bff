import { LogsCustomOutputDto, LogsOutputDto, LogRepositoryInterface } from '@/application/contracts';
import { customOutputDto } from '@/application/helpers';
import { LogsMapper } from '@/application/mappers';

export class FindOneLogByKeyUseCase {
    constructor(private readonly logRepository: LogRepositoryInterface) {}

    async execute(key: string): Promise<LogsCustomOutputDto<LogsOutputDto>> {
        const entity = await this.logRepository.findOneByKey(key);

        if (!entity) {
            throw new Error('Log not found');
        }

        const outputDto = LogsMapper.entityToDto(entity);

        return customOutputDto(outputDto);
    }
}
