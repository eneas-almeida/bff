import { FilterInputDto, LogsRepositoryInterface } from '@/application/contracts';
import { LogsMapper } from '@/application/mappers';
import { LogsEntityInterface } from '@/domain/@shared/contracts';
import { LogSchema } from '../schemas';

export class LogsMongooseRepository implements LogsRepositoryInterface {
    async create(entity: LogsEntityInterface): Promise<LogsEntityInterface> {
        try {
            const data = LogsMapper.entityToDataAny(entity);

            const document = await LogSchema.create(data);

            entity.setId(document._id.toString());

            return entity;
        } catch (e) {
            throw new Error(e.message);
        }
    }

    async filter(input: FilterInputDto): Promise<LogsEntityInterface[]> {
        try {
            const { query, sort, skip, limit } = input;

            const documents = await LogSchema.find(query).skip(skip).limit(limit).sort(sort).exec();

            return documents.length ? LogsMapper.documentsToEntityCollection(documents) : [];
        } catch (e) {
            throw new Error(e.message);
        }
    }

    async findOneById(id: string): Promise<LogsEntityInterface | null> {
        try {
            const document = await LogSchema.findById(id);

            return document ? LogsMapper.documentToEntity(document) : null;
        } catch (e) {
            throw new Error(e.message);
        }
    }

    async findOneByKey(key: string): Promise<LogsEntityInterface | null> {
        try {
            const document = await LogSchema.findOne({ key });

            return document ? LogsMapper.documentToEntity(document) : null;
        } catch (e) {
            throw new Error(e.message);
        }
    }

    async deleteAll(): Promise<void> {
        try {
            await LogSchema.deleteMany();
        } catch (e) {
            throw new Error(e.message);
        }
    }
}
