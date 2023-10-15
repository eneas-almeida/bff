import { FilterInputDto, AccountsRepositoryInterface } from '@/application/contracts';
import { AccountMapper } from '@/application/mappers';
import { AccountEntityInterface } from '@/domain/@shared/contracts';
import { AccountSchema } from '../schemas';

export class AccountMongooseRepository implements AccountsRepositoryInterface {
    async create(entity: AccountEntityInterface): Promise<AccountEntityInterface> {
        const data = AccountMapper.entityToDocument(entity);

        try {
            const document = await AccountSchema.create(data);

            entity.setId(document._id.toString());

            return entity;
        } catch (e) {
            throw new Error(e.message);
        }
    }

    async filter(input: FilterInputDto): Promise<AccountEntityInterface[]> {
        try {
            const { query, sort, skip, limit } = input;

            const documents = await AccountSchema.find(query).skip(skip).limit(limit).sort(sort).exec();

            return documents.length ? AccountMapper.documentsToEntityCollection(documents) : [];
        } catch (e) {
            throw new Error(e.message);
        }
    }

    async findOneById(id: string): Promise<AccountEntityInterface | null> {
        try {
            const document = await AccountSchema.findById(id);

            return document ? AccountMapper.documentToEntity(document) : null;
        } catch (e) {
            throw new Error(e.message);
        }
    }

    async findOneByEmail(email: string): Promise<AccountEntityInterface | null> {
        try {
            const document = await AccountSchema.findOne({ email });

            return document ? AccountMapper.documentToEntity(document) : null;
        } catch (e) {
            throw new Error(e.message);
        }
    }

    async deleteAll(): Promise<void> {
        try {
            await AccountSchema.deleteMany();
        } catch (e) {
            throw new Error(e.message);
        }
    }
}
