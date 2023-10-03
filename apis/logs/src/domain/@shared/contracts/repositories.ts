import { FilterInputDto } from '@/shared/filter';
import { LogEntityInterface, LogOrderFieldEnum } from './entities';

export interface LogRepositoryInterface {
    create(entity: LogEntityInterface): Promise<LogEntityInterface>;
    filter(input: FilterInputDto<LogOrderFieldEnum>): Promise<LogEntityInterface[]>;
    findOneById(id: string): Promise<LogEntityInterface | null>;
    findOneByKey(key: string): Promise<LogEntityInterface | null>;
}
