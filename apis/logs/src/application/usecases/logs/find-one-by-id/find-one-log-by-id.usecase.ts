import { LogsCustomOutputDto, LogsOutputDto, LogsRepositoryInterface } from '@/application/contracts';
import { customOutputDto } from '@/application/helpers';
import { LogsMapper } from '@/application/mappers';

export class FindOneLogByIdUseCase {
    constructor(private readonly logsRepository: LogsRepositoryInterface) {}

    async execute(id: string): Promise<LogsCustomOutputDto<LogsOutputDto>> {
        const entity = await this.logsRepository.findOneById(id);

        if (!entity) {
            throw new Error('Log not found');
        }

        const outputDto = LogsMapper.entityToOutputDto(entity);

        return customOutputDto(outputDto);
    }
}
