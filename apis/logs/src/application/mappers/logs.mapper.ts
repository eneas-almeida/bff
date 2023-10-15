import { LogsCreateInputDto, LogsOutputDto } from '@/application/contracts';
import { LogsEntityInterface } from '@/domain/@shared/contracts';
import { LogFactory } from '@/domain/logs';

export class LogMapper {
    static dataAnyToDto(data: any): LogsCreateInputDto {
        return {
            origin: data.origin,
            key: data.key,
            type: data.type,
            code: data.code,
            request: data.request,
            response: data.response,
        };
    }

    static dtoToEntity(input: LogsCreateInputDto): LogsEntityInterface {
        return LogFactory.create(input.origin, input.key, input.request, input.response);
    }

    static entityToDto(entity: LogsEntityInterface): LogsOutputDto {
        return {
            id: entity.id,
            origin: entity.origin,
            key: entity.key,
            type: entity.type,
            code: entity.code,
            request: entity.request,
            response: entity.response,
            createdAt: entity.createdAt,
        };
    }

    static entitiesToDtoCollection(entities: LogsEntityInterface[]): LogsOutputDto[] {
        return entities.map((entity) => LogMapper.entityToDto(entity));
    }

    static entityToDocument(entity: LogsEntityInterface) {
        return {
            origin: entity.origin,
            key: entity.key,
            request: entity.request,
            response: entity.response,
        };
    }

    static documentToEntity(doc: any): LogsEntityInterface {
        const entity = LogFactory.create(doc.origin, doc.key, doc.request, doc.response);

        entity.setId(doc.id);
        entity.setCreatedAt(doc.createdAt);

        return entity;
    }

    static documentsToEntityCollection(docs: any[]): LogsEntityInterface[] {
        return docs.map((doc) => LogMapper.documentToEntity(doc));
    }
}
