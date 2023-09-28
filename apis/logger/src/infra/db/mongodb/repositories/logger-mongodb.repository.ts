import { LoggerMapper } from '@/data/mappers';
import { LoggerEntityInterface, LoggerRepositoryInterface } from '@/domain/@shared/contracts';
import { LoggerSchema } from '../schemas';

export class LoggerMongodbRepository implements LoggerRepositoryInterface {
    async create(entity: LoggerEntityInterface): Promise<LoggerEntityInterface> {
        const data = LoggerMapper.entityToSchemaData(entity);

        try {
            const schema = await LoggerSchema.create(data);

            entity.setId(schema._id.toString());

            return entity;
        } catch (e) {
            throw new Error(e.message);
        }
    }

    async findByFilter(): Promise<LoggerEntityInterface[]> {
        try {
            const schemas = await LoggerSchema.find();

            return schemas ? LoggerMapper.schemasToEntityCollection(schemas) : null;
        } catch (e) {
            throw new Error(e.message);
        }
    }

    async findOneById(id: string): Promise<LoggerEntityInterface | null> {
        try {
            const schema = await LoggerSchema.findById(id);

            return schema ? LoggerMapper.schemaToEntity(schema) : null;
        } catch (e) {
            throw new Error(e.message);
        }
    }
}
