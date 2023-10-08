import { LogMapper } from '@/data/mappers';
import { LogRepositoryInterface } from '@/domain/@shared/contracts';
import { LogCustomOutputDto, LogOutputDto } from '@/usecases/contracts';
import { customOutputDto } from '@/usecases/helpers';

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
