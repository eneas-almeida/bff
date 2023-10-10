import { AccountCreateInputDto, AccountOutputDto } from '@/application/contracts';
import { AccountEntityInterface } from '@/domain/@shared/contracts';
import { AccountFactory } from '@/domain/accounts';

export class AccountMapper {
    static dataAnyToDto(data: any): AccountCreateInputDto {
        return {
            email: data.email,
            password: data.password,
        };
    }

    static dtoToEntity(input: AccountCreateInputDto): AccountEntityInterface {
        return AccountFactory.create(input.email, input.password);
    }

    static entityToDto(entity: AccountEntityInterface): AccountOutputDto {
        return {
            id: entity.id,
            email: entity.email,
            password: entity.password,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
        };
    }

    static entitiesToDtoCollection(entities: AccountEntityInterface[]): AccountOutputDto[] {
        return entities.map((entity) => AccountMapper.entityToDto(entity));
    }

    static entityToDocument(entity: AccountEntityInterface) {
        return {
            email: entity.email,
            password: entity.password,
        };
    }

    static documentToEntity(doc: any): AccountEntityInterface {
        const entity = AccountFactory.create(doc.email, doc.password);

        entity.setId(doc.id);
        entity.setCreatedAt(doc.createdAt);

        return entity;
    }

    static documentsToEntityCollection(docs: any[]): AccountEntityInterface[] {
        return docs.map((doc) => AccountMapper.documentToEntity(doc));
    }
}
