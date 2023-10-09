import { LogCustomOutputDto, LogOutputDto } from '@/application/contracts';
import { customOutputDto } from '@/application/helpers';
import { LogMapper } from '@/data/mappers';
import { LogRepositoryInterface } from '@/domain/@shared/contracts';

export class FindOneLogByIdUseCase {
    constructor(private readonly logRepository: LogRepositoryInterface) {}

    async execute(id: string): Promise<LogCustomOutputDto<LogOutputDto>> {
        const entity = await this.logRepository.findOneById(id);

        if (!entity) {
            throw new Error('Log not found');
        }

        const outputDto = LogMapper.entityToDto(entity);

        return customOutputDto(outputDto);
    }
}
