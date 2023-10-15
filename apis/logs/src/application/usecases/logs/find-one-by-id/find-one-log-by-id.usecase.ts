import { LogsCustomOutputDto, LogsOutputDto, LogRepositoryInterface } from '@/application/contracts';
import { customOutputDto } from '@/application/helpers';
import { LogMapper } from '@/application/mappers';

export class FindOneLogByIdUseCase {
    constructor(private readonly logRepository: LogRepositoryInterface) {}

    async execute(id: string): Promise<LogsCustomOutputDto<LogsOutputDto>> {
        const entity = await this.logRepository.findOneById(id);

        if (!entity) {
            throw new Error('Log not found');
        }

        const outputDto = LogMapper.entityToDto(entity);

        return customOutputDto(outputDto);
    }
}
