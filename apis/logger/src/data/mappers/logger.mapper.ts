import { LoggerEntityInterface } from '@/domain/@shared/contracts';
import { LoggerFactory } from '@/domain/logger/factory';
import { LoggerCreateInputDto, LoggerOutputDto } from '@/usecases/contracts';

export class LoggerMapper {
    static dataToDto(data: any): LoggerCreateInputDto {
        return {
            key: data.key,
            origin: data.origin,
            request: data.request,
            response: data.response,
        };
    }

    static dtoToEntity(input: LoggerCreateInputDto): LoggerEntityInterface {
        return LoggerFactory.create(input.origin, input.key, input.request, input.response);
    }

    static entityToDto(entity: LoggerEntityInterface): LoggerOutputDto {
        return {
            id: entity.id,
            origin: entity.origin,
            key: entity.key,
            request: entity.request,
            response: entity.response,
            createdAt: entity.createdAt,
        };
    }

    static entitiesToDtoCollection(entities: LoggerEntityInterface[]): LoggerOutputDto[] {
        return entities.map((entity) => LoggerMapper.entityToDto(entity));
    }

    static entityToSchemaData(entity: LoggerEntityInterface) {
        return {
            origin: entity.origin,
            key: entity.key,
            request: entity.request,
            response: entity.response,
        };
    }

    static schemaToEntity(schema: any): LoggerEntityInterface {
        const entity = LoggerFactory.create(schema.origin, schema.key, schema.request, schema.response);

        entity.setId(schema.id);
        entity.setCreatedAt(schema.createdAt);

        return entity;
    }

    static schemasToEntityCollection(schemas: any[]): LoggerEntityInterface[] {
        return schemas.map((schema) => LoggerMapper.schemaToEntity(schema));
    }
}
