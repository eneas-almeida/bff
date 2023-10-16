import { AccountsCreateInputDto, AccountsOutputDto } from '@/application/contracts';
import { AccountEntityInterface } from '@/domain/@shared/contracts';
import { AccountFactory } from '@/domain/accounts';

export class AccountMapper {
    static dtoToEntity(input: AccountsCreateInputDto): AccountEntityInterface {
        const { email, password } = input.body;
        return AccountFactory.create(email, password);
    }

    static entityToDto(entity: AccountEntityInterface): AccountsOutputDto {
        return {
            id: entity.id,
            email: entity.email,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
        };
    }

    static entitiesToDtoCollection(entities: AccountEntityInterface[]): AccountsOutputDto[] {
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
