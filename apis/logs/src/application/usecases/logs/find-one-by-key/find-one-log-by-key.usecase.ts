import { LogsCustomOutputDto, LogsOutputDto, LogRepositoryInterface } from '@/application/contracts';
import { customOutputDto } from '@/application/helpers';
import { LogMapper } from '@/application/mappers';

export class FindOneLogByKeyUseCase {
    constructor(private readonly logRepository: LogRepositoryInterface) {}

    async execute(key: string): Promise<LogsCustomOutputDto<LogsOutputDto>> {
        const entity = await this.logRepository.findOneByKey(key);

        if (!entity) {
            throw new Error('Log not found');
        }

        const outputDto = LogMapper.entityToDto(entity);

        return customOutputDto(outputDto);
    }
}
