import { LogEntityInterface } from '@/domain/@shared/contracts';
import { LogFactory } from '@/domain/logs/factory';
import { LogCreateInputDto, LogOutputDto } from '@/application/contracts';

export class LogMapper {
    static dataAnyToDto(data: any): LogCreateInputDto {
        return {
            origin: data.origin,
            key: data.key,
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

    static entityToDocument(entity: LogEntityInterface) {
        return {
            origin: entity.origin,
            key: entity.key,
            request: entity.request,
            response: entity.response,
        };
    }

    static documentToEntity(doc: any): LogEntityInterface {
        const entity = LogFactory.create(doc.origin, doc.key, doc.request, doc.response);

        entity.setId(doc.id);
        entity.setCreatedAt(doc.createdAt);

        return entity;
    }

    static documentsToEntityCollection(docs: any[]): LogEntityInterface[] {
        return docs.map((doc) => LogMapper.documentToEntity(doc));
    }
}
