import { LoggerMapper } from '@/data/mappers';
import { LoggerRepositoryInterface } from '@/domain/@shared/contracts';
import { envs } from '@/main/configs';
import { api } from '@/main/utils';
import { LoggerOutputHateosDto } from '@/usecases/contracts';

export class FindLoggersByFilterUseCase {
    constructor(private readonly loggerRepository: LoggerRepositoryInterface) {}

    async execute(): Promise<LoggerOutputHateosDto> {
        const entities = await this.loggerRepository.findByFilter();

        const outputDtoCollection = LoggerMapper.entitiesToDtoCollection(entities);

        if (envs.api.hateosActivated) {
            const url = `${api}/loggers`;

            const hateos = [
                { method: 'post', url, description: 'Create a new logger' },
                { method: 'get', url: `${url}`, description: 'Find and filter logs' },
                { method: 'get', url: `${url}/:id`, description: 'Find a logger by id' },
            ];

            return {
                data: outputDtoCollection,
                _links: hateos,
            };
        }

        return {
            data: outputDtoCollection,
        };
    }
}
