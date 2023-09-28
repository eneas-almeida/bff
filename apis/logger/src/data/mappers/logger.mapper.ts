import { LoggerEntityInterface } from '@/domain/@shared/contracts';
import { LoggerFactory } from '@/domain/logger/factory';
import { envs } from '@/main/configs';
import { api } from '@/main/utils';

import { LoggerCreateInputDto, LoggerOutputDto } from '@/usecases/contracts';

export class LoggerMapper {
    static dataToDto(data: any): LoggerCreateInputDto {
        return {
            key: data.key,
            request: data.request,
            response: data.response,
        };
    }

    static dtoToEntity(input: LoggerCreateInputDto): LoggerEntityInterface {
        return LoggerFactory.create(input.key, input.request, input.response);
    }

    static entityToDto(entity: LoggerEntityInterface): LoggerOutputDto {
        const url = `${api}/loggers`;

        const output: LoggerOutputDto = {
            id: entity.id,
            key: entity.key,
            request: entity.request,
            response: entity.response,
            createdAt: entity.createdAt,
        };

        if (envs.api.hateosActivated) {
            const hateos = [
                { method: 'post', url, description: 'Create a new logger' },
                { method: 'get', url: `${url}`, description: 'Find all loggers' },
                { method: 'get', url: `${url}/:params`, description: 'Find a logger by between dates' },
                { method: 'get', url: `${url}/:id`, description: 'Find a logger by id' },
            ];

            output['_links'] = hateos;
        }

        return output;
    }

    static entityToSchemaData(entity: LoggerEntityInterface) {
        return {
            key: entity.key,
            request: entity.request,
            response: entity.response,
        };
    }

    static schemaToEntity(schema: any): LoggerEntityInterface {
        const entity = LoggerFactory.create(schema.key, schema.request, schema.response);

        entity.setId(schema.id);
        entity.setCreatedAt(schema.createdAt);
        entity.setUpdatedAt(schema.updatedAt);

        return entity;
    }

    static schemasToEntityCollection(schemas: any[]): LoggerEntityInterface[] {
        return schemas.map((schema) => LoggerMapper.schemaToEntity(schema));
    }
}
