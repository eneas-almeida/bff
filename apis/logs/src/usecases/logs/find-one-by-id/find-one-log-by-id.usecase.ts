import { LogMapper } from '@/data/mappers';
import { LogRepositoryInterface } from '@/domain/@shared/contracts';
import { LogOutputCustomDto } from '@/usecases/contracts';
import { outputCustomDto } from '@/usecases/helpers';

export class FindOneLogByIdUseCase {
    constructor(private readonly logRepository: LogRepositoryInterface) {}

    async execute(id: string): Promise<LogOutputCustomDto> {
        const entity = await this.logRepository.findOneById(id);

        const outputDto = LogMapper.entityToDto(entity);

        return outputCustomDto(outputDto);
    }
}
