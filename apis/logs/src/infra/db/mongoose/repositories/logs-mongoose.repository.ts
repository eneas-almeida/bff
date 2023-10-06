import { LogMapper } from '@/data/mappers';
import { LogEntityInterface, LogRepositoryInterface } from '@/domain/@shared/contracts';
import { LogFilterInputDto } from '@/usecases/contracts';
import { LogSchema } from '../schemas';

export class LogMongooseRepository implements LogRepositoryInterface {
    async create(entity: LogEntityInterface): Promise<LogEntityInterface> {
        const data = LogMapper.entityToDocument(entity);

        try {
            const document = await LogSchema.create(data);

            entity.setId(document._id.toString());

            return entity;
        } catch (e) {
            throw new Error(e.message);
        }
    }

    async filter(input: LogFilterInputDto): Promise<LogEntityInterface[]> {
        try {
            const { query, skip, limit } = input;

            const documents = await LogSchema.find(query).skip(skip).limit(limit).exec();

            return documents.length ? LogMapper.documentsToEntityCollection(documents) : [];
        } catch (e) {
            throw new Error(e.message);
        }
    }

    async findOneById(id: string): Promise<LogEntityInterface | null> {
        try {
            const document = await LogSchema.findById(id);

            return document ? LogMapper.documentToEntity(document) : null;
        } catch (e) {
            throw new Error(e.message);
        }
    }

    async findOneByKey(key: string): Promise<LogEntityInterface | null> {
        try {
            const document = await LogSchema.findOne({ key });

            return document ? LogMapper.documentToEntity(document) : null;
        } catch (e) {
            throw new Error(e.message);
        }
    }
}
