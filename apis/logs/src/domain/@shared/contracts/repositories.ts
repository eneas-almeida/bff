import { LogEntityInterface } from './entities';
import { FilterInputDto } from './filter';

export interface LogRepositoryInterface {
    create(entity: LogEntityInterface): Promise<LogEntityInterface>;
    filter(input: FilterInputDto): Promise<LogEntityInterface[]>;
    findOneById(id: string): Promise<LogEntityInterface | null>;
    findOneByKey(key: string): Promise<LogEntityInterface | null>;
}
