import { LogEntityInterface } from '@/domain/@shared/contracts';
import { LogFactory } from '@/domain/logs/factory';
import { LogCreateInputDto, LogOutputDto } from '@/usecases/contracts';

export class LogMapper {
    static dataToDto(data: any): LogCreateInputDto {
        return {
            key: data.key,
            origin: data.origin,
            request: data.request,
            response: data.response,
        };
    }

    static dtoToEntity(input: LogCreateInputDto): LogEntityInterface {
        return LogFactory.create(input.origin, input.key, input.request, input.response);
    }

    static entityToDto(entity: LogEntityInterface): LogOutputDto {
        return {
            id: entity.id,
            origin: entity.origin,
            key: entity.key,
            request: entity.request,
            response: entity.response,
            createdAt: entity.createdAt,
        };
    }

    static entitiesToDtoCollection(entities: LogEntityInterface[]): LogOutputDto[] {
        return entities.map((entity) => LogMapper.entityToDto(entity));
    }

    static entityToSchemaData(entity: LogEntityInterface) {
        return {
            origin: entity.origin,
            key: entity.key,
            request: entity.request,
            response: entity.response,
        };
    }

    static schemaToEntity(schema: any): LogEntityInterface {
        const entity = LogFactory.create(schema.origin, schema.key, schema.request, schema.response);

        entity.setId(schema.id);
        entity.setCreatedAt(schema.createdAt);

        return entity;
    }

    static schemasToEntityCollection(schemas: any[]): LogEntityInterface[] {
        return schemas.map((schema) => LogMapper.schemaToEntity(schema));
    }
}
