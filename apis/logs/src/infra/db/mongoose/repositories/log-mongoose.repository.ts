import { LogMapper } from '@/data/mappers';
import { LogEntityInterface, LogRepositoryInterface } from '@/domain/@shared/contracts';
import { LogSchema } from '../schemas';

export class LogMongooseRepository implements LogRepositoryInterface {
    async create(entity: LogEntityInterface): Promise<LogEntityInterface> {
        const data = LogMapper.entityToSchemaData(entity);

        try {
            const schema = await LogSchema.create(data);

            entity.setId(schema._id.toString());

            return entity;
        } catch (e) {
            throw new Error(e.message);
        }
    }

    async filter(): Promise<LogEntityInterface[]> {
        try {
            const schemas = await LogSchema.find();

            return schemas.length ? LogMapper.schemasToEntityCollection(schemas) : [];
        } catch (e) {
            throw new Error(e.message);
        }
    }

    async findOneById(id: string): Promise<LogEntityInterface | null> {
        try {
            const schema = await LogSchema.findById(id);

            return schema ? LogMapper.schemaToEntity(schema) : null;
        } catch (e) {
            throw new Error(e.message);
        }
    }
}
