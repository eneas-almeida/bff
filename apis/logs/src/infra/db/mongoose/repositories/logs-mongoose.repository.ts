import { FilterInputDto, LogRepositoryInterface } from '@/application/contracts';
import { LogMapper } from '@/application/mappers';
import { LogsEntityInterface } from '@/domain/@shared/contracts';
import { LogSchema } from '../schemas';

export class LogMongooseRepository implements LogRepositoryInterface {
    async create(entity: LogsEntityInterface): Promise<LogsEntityInterface> {
        const data = LogMapper.entityToDocument(entity);

        try {
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

            return documents.length ? LogMapper.documentsToEntityCollection(documents) : [];
        } catch (e) {
            throw new Error(e.message);
        }
    }

    async findOneById(id: string): Promise<LogsEntityInterface | null> {
        try {
            const document = await LogSchema.findById(id);

            return document ? LogMapper.documentToEntity(document) : null;
        } catch (e) {
            throw new Error(e.message);
        }
    }

    async findOneByKey(key: string): Promise<LogsEntityInterface | null> {
        try {
            const document = await LogSchema.findOne({ key });

            return document ? LogMapper.documentToEntity(document) : null;
        } catch (e) {
            throw new Error(e.message);
        }
    }
}
